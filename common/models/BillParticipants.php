<?php

namespace common\models;

use Yii;
use \common\models\base\BillParticipants as BaseBillParticipants;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "billParticipants".
 */
class BillParticipants extends BaseBillParticipants
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
        $user = $this->participant;
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
