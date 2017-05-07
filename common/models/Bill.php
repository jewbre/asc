<?php

namespace common\models;

use Yii;
use \common\models\base\Bill as BaseBill;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "bill".
 */
class Bill extends BaseBill
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
            'description' => function(Bill $model) {
                return $model->description ? $model->description : 'No description';
            },
            'date' => function(Bill $model) {
                $date = new \DateTime();
                $date->setTimestamp($model->created_at);

                return $date->format('c');
            },
            'amount' => function(Bill $model) {
                return (double) number_format($model->amount, '2', '.', '');
            },
            'payer' => function(Bill $model) {
                $payer = $model->payer;
                return [
                    'id' => $payer->id,
                    'username' => $payer->username,
                    'avatar' => $payer->getAvatar(),
                ];
            },
            'participants' => function(Bill $model) {
                return $model->billParticipants;
            },
            'category' => function(Bill $model) {
                return $model->category;
            },
            'group' => function(Bill $model) {
                return $model->group;
            },
            'currency' => function(Bill $model) {
                return [
                    'id' => '1',
                    'name' => 'Hrvatska kuna',
                    'code' => 'HRK',
                    'shortcode' => 'kn'
                ];
            }
        ];
    }


}
