<?php
/**
 * Created by PhpStorm.
 * Date: 03/05/2017
 * Time: 23:06
 */

namespace backend\modules\api\actions\bill;

use common\models\Bill;
use common\models\Debt;
use common\models\Group;
use common\models\User;
use yii\rest\DeleteAction as BaseDeleteAction;
use yii\web\NotFoundHttpException;
use yii\web\UnauthorizedHttpException;

class DeleteAction extends BaseDeleteAction
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

        $oldModel = Bill::findOne(['id' => $id]);
        $oldParticipants = $oldModel->billParticipants;
        $oldPayer = $oldModel->payer;
        $oldParticipantIDs = array_map(function ($p) {
            return $p->participantID;
        }, $oldParticipants);
        $this->updateDebts($oldPayer, $oldParticipantIDs, $groupID, -((double)$oldModel->amount));

        /** @var Bill $model */
        $model = parent::run($id);

        return $model;
    }

    private function updateDebts($payer, $participants, $groupID, $diffAmount)
    {
        $totalPeopleInBill = (count($participants) + 1);
        foreach ($participants as $p) {
            $participant = User::findOne(['id' => $p]);
            if ($payer->id < $participant->id) {
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

            if ($dept) {
                $dept->amount += $amount;
                $dept->update();
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