<?php

namespace common\models;

use Yii;
use \common\models\base\BillCategory as BaseBillCategory;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "billCategory".
 */
class BillCategory extends BaseBillCategory
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
            'name'
        ];
    }

    public static function getGroupDefaultCategory($groupID)
    {
        $defaultCategory = BillCategory::findOne(['groupID' => $groupID, 'name' => 'Uncategorized']);

        if (!$defaultCategory) {
            $defaultCategory = new BillCategory();
            $defaultCategory->setAttributes([
                'name' => 'Uncategorized',
                'groupID' => $groupID
            ]);
            $defaultCategory->save();
        }

        return $defaultCategory;
    }


}
