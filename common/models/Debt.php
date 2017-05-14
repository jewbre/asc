<?php

namespace common\models;

use common\models\base\Debt as BaseDebt;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "debt".
 */
class Debt extends BaseDebt
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
            [“
                # custom validation rules
            ]
        );
    }

    public function fields()
    {
        return [
            'debt' => function (Debt $model) {
                return [
                    'amount' => $model->firstPersonID == user()->id ? ((double)$model->amount) : -((double)$model->amount),
                    'currency' => [
                        'id' => '1',
                        'name' => 'Hrvatska kuna',
                        'code' => 'HRK',
                        'shortcode' => 'kn'
                    ]
                ];
            },
            'user' => function (Debt $model) {
                return $model->firstPersonID == user()->id ? $model->secondPerson : $model->firstPerson;
            },
        ];
    }


}
