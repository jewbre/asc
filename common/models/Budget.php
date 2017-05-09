<?php

namespace common\models;

use common\models\base\Budget as BaseBudget;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "budget".
 */
class Budget extends BaseBudget
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
            'id',
            'amount' => function(Budget $model) {
                $totalBills = Bill::find()
                    ->select(['SUM(amount) AS amount'])
                    ->where('groupID = :group', ['group' => $model->groupID])
                    ->groupBy(['groupID'])
                    ->one();
                return ((double) $model->amount) - ((double)$totalBills->amount);
            },
            'currency' => function (Budget $model) {
                return [
                    'id' => 1,
                    'name' => 'Hrvatska kuna',
                    'code' => 'HRK',
                    'shortcode' => 'kn'
                ];
            },
            'group' => function (Budget $model) {
                return $model->group;
            }
        ];
    }


}
