<?php

namespace common\models;

use common\models\base\ShoppingCategory as BaseShoppingCategory;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "shoppingCategory".
 */
class ShoppingCategory extends BaseShoppingCategory
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
            'group' => function (ShoppingCategory $category) {
                return $category->group;
            }
        ];
    }


}
