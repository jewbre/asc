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
use common\models\EventParticipant;
use common\models\User;
use yii\rest\CreateAction as BaseCreateAction;

class CreateAction extends BaseCreateAction
{
    public function run()
    {
        $groupID = user()->selectedGroupID;

        $request = \Yii::$app->getRequest();
        $bodyParams = $request->bodyParams;

        $participants = $bodyParams['participants'];
        if(!$participants || empty($participants)) {
            $participants = [];
        }

        $date = new \DateTime($bodyParams['date']);

        $bodyParams['created_at'] = $date->getTimestamp();
        $bodyParams['groupID'] = $groupID;
        $request->bodyParams = $bodyParams;

        /** @var Bill $model */
        $model = parent::run();

        if(empty($model->getErrors())) {
            foreach ($participants as $participant) {
                $p = new EventParticipant();
                $p->setAttributes([
                    'eventID' => $model->id,
                    'userID' => $participant
                ]);
                $p->save();
            }
        }

        return $model;
    }

}