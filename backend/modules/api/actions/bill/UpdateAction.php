<?php
/**
 * Created by PhpStorm.
 * Date: 03/05/2017
 * Time: 23:06
 */

namespace backend\modules\api\actions\bill;

use common\models\Bill;
use common\models\BillCategory;
use common\models\BillParticipants;
use common\models\Debt;
use common\models\Group;
use common\models\User;
use yii\rest\UpdateAction as BaseUpdateAction;
use yii\web\NotFoundHttpException;
use yii\web\UnauthorizedHttpException;

class UpdateAction extends BaseUpdateAction
{
    public function run($id)
    {
        $model = Bill::findOne(['id' => $id]);
        if (!$model) {
            throw new NotFoundHttpException('Non existing item.');
        }

        /** @var User $user */
        $groupID = $model->groupID;
        $user = \Yii::$app->getUser()->getIdentity();
        $isAllowedAccess = $user && array_reduce($user->groups, function ($acc, Group $group) use ($groupID) {
                return $acc || $groupID == $group->id;
            }, false);

        if (!$isAllowedAccess) {
            throw new UnauthorizedHttpException("You are not authorized to edit other people's items.");
        }

        $category = \Yii::$app->getRequest()->post('category', null);
        if(!$category) {
            $category = BillCategory::getGroupDefaultCategory($groupID)->id;
        }

        if (!is_numeric($category)) {
            $name = trim($category);

            $billCategory = BillCategory::findOne([
                'name' => $name,
                'groupID' => $groupID
            ]);

            if (!$billCategory) {
                $billCategory = new BillCategory();
                $billCategory->setAttributes([
                    'name' => $name,
                    'groupID' => $groupID
                ]);
                $billCategory->save();
            }
        } else {
            $billCategory = BillCategory::findOne([
                'id' => $category
            ]);
        }

        $request = \Yii::$app->getRequest();
        $bodyParams = $request->bodyParams;

        $participants = $bodyParams['participants'];
        if(!$participants || empty($participants)) {
            $participants = [];
        } elseif(is_string($participants) && $participants[0] == '[') {
            $participants = explode(',',
                substr($participants, 1, strlen($participants) - 2)
            );
        }

        if(!isset($bodyParams['date'])) {
            $bodyParams['created_at'] = null;
        } else {
            $date = new \DateTime($bodyParams['date']);
            $bodyParams['created_at'] = $date->getTimestamp();
        }

        $payer = User::findOne(['id' => $bodyParams['payer']]);
        if(!$payer) {
//            throw new InvalidArgumentException
        }

        unset($bodyParams['category']);
        $bodyParams['payerID'] = $payer->id;
        $bodyParams['categoryID'] = $billCategory->id;
        $bodyParams['groupID'] = $groupID;
        $request->bodyParams = $bodyParams;

        $oldModel = Bill::findOne(['id' => $id]);
        $oldParticipants = $oldModel->billParticipants;
        $oldPayer = $oldModel->payer;

        /** @var Bill $model */
        $model = parent::run($id);

        BillParticipants::deleteAll(['billID' => $model->id]);
        foreach ($participants as $participant) {
            $p = new BillParticipants();
            $p->setAttributes([
                'billID' => $model->id,
                'participantID' => $participant
            ]);
            $p->save();
        }

        $oldParticipantIDs = array_map(function($p) { return $p->participantID; }, $oldParticipants);
        $this->updateDebts($oldPayer, $oldParticipantIDs, $groupID, -((double) $oldModel->amount));
        $this->updateDebts($payer, $participants, $groupID, (double) $model->amount);

        return $model;
    }

    private function updateDebts($payer, $participants, $groupID, $diffAmount)
    {
        $totalPeopleInBill = (count($participants) + 1);
        foreach ($participants as $p) {
            $participant = User::findOne(['id' => $p]);
            if($payer->id < $participant->id) {
                $firstPerson = $payer;
                $secondPerson = $participant;
                $amount = ($diffAmount) / $totalPeopleInBill;
            } else {
                $firstPerson = $participant;
                $secondPerson = $payer;
                $amount = -($diffAmount) / $totalPeopleInBill;
            }

            $dept = Debt::findOne([
                'firstPersonID' => $firstPerson->id,
                'secondPersonID' => $secondPerson->id,
                'groupID' => $groupID
            ]);

            if($dept) {
                $dept->amount += $amount;
                $dept->update();
                $errors = $dept->getErrors();
                $t = 1;
            } else {
                $dept = new Debt();
                $dept->setAttributes([
                    'firstPersonID' => $firstPerson->id,
                    'secondPersonID' => $secondPerson->id,
                    'groupID' => $groupID,
                    'amount' => $amount
                ]);
                $dept->save();
            }
        }
    }


}