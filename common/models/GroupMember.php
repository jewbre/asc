<?php

namespace common\models;

use common\models\base\GroupMember as BaseGroupMember;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "groupMember".
 */
class GroupMember extends BaseGroupMember
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
