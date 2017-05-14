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
use common\models\User;
use yii\rest\CreateAction as BaseCreateAction;

class CreateAction extends BaseCreateAction
{
    public function run()
    {
        $groupID = user()->selectedGroupID;

        $category = \Yii::$app->getRequest()->post('category', null);
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
        }

        $date = new \DateTime($bodyParams['date']);

        $payer = User::findOne(['id' => $bodyParams['payer']]);
        if (!$payer) {
//            throw new InvalidArgumentException
        }

        unset($bodyParams['category']);
        $bodyParams['payerID'] = $payer->id;
        $bodyParams['categoryID'] = $billCategory->id;
        $bodyParams['groupID'] = $groupID;
        $bodyParams['created_at'] = $date->getTimestamp();
        $request->bodyParams = $bodyParams;

        /** @var Bill $model */
        $model = parent::run();

        foreach ($participants as $participant) {
            $p = new BillParticipants();
            $p->setAttributes([
                'billID' => $model->id,
                'participantID' => $participant
            ]);
            $p->save();
        }

        $this->updateDebts($payer, $participants, $groupID, (double) $bodyParams['amount']);

        return $model;
    }

    private function updateDebts($payer, $participants, $groupID, $amount)
    {
        $totalPeopleInBill = (count($participants) + 1);
        foreach ($participants as $p) {
            $participant = User::findOne(['id' => $p]);

            if ($payer->id < $participant->id) {
                $firstPerson = $payer;
                $secondPerson = $participant;
                $amount = $amount / $totalPeopleInBill;
            } else {
                $firstPerson = $participant;
                $secondPerson = $payer;
                $amount = -$amount / $totalPeopleInBill;
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