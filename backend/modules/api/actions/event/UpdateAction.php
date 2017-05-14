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
use common\models\Group;
use common\models\RepeatableEvent;
use common\models\User;
use yii\rest\UpdateAction as BaseUpdateAction;
use yii\web\NotFoundHttpException;
use yii\web\UnauthorizedHttpException;

class UpdateAction extends BaseUpdateAction
{
    public function run($id)
    {
        $groupID = user()->selectedGroupID;

        $request = \Yii::$app->getRequest();
        $bodyParams = $request->bodyParams;

        $participants = user()->selectedGroup->groupMembers;

        if(!isset($bodyParams['date'])) {
            $bodyParams['created_at'] = null;
        } else {
            $date = new \DateTime($bodyParams['date']);
            $bodyParams['created_at'] = $date->getTimestamp();
        }

        $repeatableType = $bodyParams['isRepeatable'];
        $isRepeatable = in_array($repeatableType,[
            RepeatableEvent::DAILY,
            RepeatableEvent::WEEKLY,
            RepeatableEvent::MONTHLY,
        ]) ? 1 : 0;

        $bodyParams['isRepeatable'] = $isRepeatable;
        $bodyParams['groupID'] = $groupID;
        $request->bodyParams = $bodyParams;

        /** @var Event $model */
        $model = parent::run($id);

        if(empty($model->getErrors())) {
            EventParticipant::deleteAll(['eventID' => $model->id]);
            foreach ($participants as $participant) {
                $p = new EventParticipant();
                $p->setAttributes([
                    'eventID' => $model->id,
                    'userID' => $participant->id
                ]);
                $p->save();
            }
        }

        return $model;
    }
}