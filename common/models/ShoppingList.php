<?php

namespace common\models;

use Yii;
use \common\models\base\ShoppingList as BaseShoppingList;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "shoppingList".
 */
class ShoppingList extends BaseShoppingList
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
