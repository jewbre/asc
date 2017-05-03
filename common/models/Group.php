<?php

namespace common\models;

use common\models\base\Group as BaseGroup;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "group".
 */
class Group extends BaseGroup
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
            'name',
            'members' => function (Group $model) {
                return $model->groupMembers;
            }
        ];
    }


}
