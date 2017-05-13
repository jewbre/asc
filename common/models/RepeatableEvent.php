<?php

namespace common\models;

use Yii;
use \common\models\base\RepeatableEvent as BaseRepeatableEvent;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "repeatableEvent".
 */
class RepeatableEvent extends BaseRepeatableEvent
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
}
