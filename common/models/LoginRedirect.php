<?php

namespace common\models;

use common\models\base\LoginRedirect as BaseLoginRedirect;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "loginRedirect".
 */
class LoginRedirect extends BaseLoginRedirect
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
        return [
            'redirectKey' => function (LoginRedirect $model) {
                return $model->loginHash;
            }
        ];
    }


}
