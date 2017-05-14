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

    public function fields()
    {
        $fields = [
            'id',
            'name',
            'category' => function(ShoppingItem $model) {
                return $model->shoppingCategory;
            },
            'isChecked' => function(ShoppingItem $model) {
                // One shopping item is attached to only one shopping list for now.
                // This is reasonable because each group has only one shopping list.
                return !empty($model->shoppingListItems);
            },
            'isBought' => function(ShoppingItem $model) {
                return !empty($model->shoppingListItems) ? (bool) $model->shoppingListItems[0]->isChecked : false;
            },
            'details',
        ];

        if($this->lastBought) {
            $fields['lastBought'] = function(ShoppingItem $model) {
                if(!$model->lastBought) {
                    return null;
                }
                $d = new \DateTime();
                $d->setTimestamp($model->lastBought);
                return $d->format('c');
            };
        }

        return $fields;
    }


}
