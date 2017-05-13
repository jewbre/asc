<?php

namespace common\models;

use Yii;
use \common\models\base\EventParticipant as BaseEventParticipant;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "eventParticipant".
 */
class EventParticipant extends BaseEventParticipant
{

public function behaviors()
    {
        return ArrayHelper::merge(
            parent::behaviors(),
            [
                # custom behaviors
            ]
        );
    }

    public function rules()
    {
        return ArrayHelper::merge(
             parent::rules(),
             [
                  # custom validation rules
             ]
        );
    }

    public function fields()
    {
        $user = $this->user;
        return [
            'id' => function ($model) use ($user) {
                return $user->id;
            },
            'username' => function ($model) use ($user) {
                return $user->username;
            },
            'avatar' => function ($model) use ($user) {
                return $user->getAvatar();
            }
        ];
    }
}
