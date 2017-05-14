<?php
/**
 * Created by PhpStorm.
 * Date: 03/05/2017
 * Time: 23:06
 */

namespace backend\modules\api\actions\event;

use common\models\Bill;
use common\models\BillCategory;
use common\models\BillParticipants;
use common\models\Debt;
use common\models\Event;
use common\models\EventParticipant;
use common\models\RepeatableEvent;
use common\models\User;
use yii\rest\CreateAction as BaseCreateAction;

class CreateAction extends BaseCreateAction
{
    public function run()
    {
        $groupID = user()->selectedGroupID;

        $request = \Yii::$app->getRequest();
        $bodyParams = $request->bodyParams;

        $participants = user()->selectedGroup->groupMembers;

        $date = new \DateTime($bodyParams['date']);

        $repeatableType = $bodyParams['isRepeatable'];
        $isRepeatable = in_array($repeatableType,[
            RepeatableEvent::DAILY,
            RepeatableEvent::WEEKLY,
            RepeatableEvent::MONTHLY,
        ]) ? 1 : 0;
        $bodyParams['isRepeatable'] = $isRepeatable;
        $bodyParams['created_at'] = $date->getTimestamp();
        $bodyParams['groupID'] = $groupID;
        $request->bodyParams = $bodyParams;

        /** @var Event $model */
        $model = parent::run();

        if(empty($model->getErrors())) {
            if($isRepeatable) {
                $repEvent = new RepeatableEvent();
                $repEvent->setAttributes([
                    'type' => $repeatableType,
                    'eventID' => $model->id,
                    'originalEventID' => $model->id
                ]);
                $repEvent->save();
            }

            foreach ($participants as $participant) {
                $p = new EventParticipant();
                $p->setAttributes([
                    'eventID' => $model->id,
                    'userID' => $participant->userID
                ]);
                $p->save();
            }
        }

        return $model;
    }

}