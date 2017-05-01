<?php

namespace common\models;

use Yii;
use \common\models\base\ShoppingItem as BaseShoppingItem;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "shoppingItem".
 */
class ShoppingItem extends BaseShoppingItem
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
