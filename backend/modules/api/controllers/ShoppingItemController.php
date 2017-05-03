<?php
/**
 * /Users/vilimstubican/work/asc/backend/runtime/giiant/f197ab8e55d1e29a2dea883e84983544
 *
 * @package default
 */


namespace backend\modules\api\controllers;

/**
 * This is the class for REST controller "GroupController".
 */
use backend\modules\api\controllers\base\BaseController;
use backend\modules\api\models\helpers\ErrorResponseBuilder;
use common\models\ShoppingListItem;
use common\models\ShoppingItem;

class ShoppingItemController extends BaseController
{
	public $modelClass = 'common\models\ShoppingItem';

    public function actions()
    {
        return array_merge(
            parent::actions(),
            [
                'create' => [
                    'class' => 'backend\modules\api\actions\shoppingItem\CreateAction',
                    'modelClass' => $this->modelClass,
                    'checkAccess' => [$this, 'checkAccess'],
                    'scenario' => $this->createScenario,
                ]
            ]
        );
    }


    public function actionCheck($id)
    {
        if(is_numeric($id)) {
            $item = ShoppingItem::findOne(['id' => $id]);
        } else {
            $item = ShoppingItem::findOne(['nID' => $id]);
        }

        if(!$item) {
            return ErrorResponseBuilder::buildResponse(404, 'Non existing item.');
        }

        if(!$this->isUserAllowedAccessToComponent($item->groupID)) {
            return ErrorResponseBuilder::buildResponse(403, 'You can not edit items from other groups.');
        }

        $shoppingListID = user()->getShoppingList()->id;
        $shoppingListItem = ShoppingListItem::findOne([
            'shoppingListID' => $shoppingListID,
            'shoppingItemID' => $item->id
        ]);

        if($shoppingListItem) {
            return $item;
        }

        $shoppingListItem = new \common\models\ShoppingListItem();
        $shoppingListItem->setAttributes([
            'shoppingListID' => $shoppingListID,
            'shoppingItemID' => $item->id
        ]);
        $shoppingListItem->save();

        return $item;
    }



    public function actionUncheck($id)
    {
        if(is_numeric($id)) {
            $item = ShoppingItem::findOne(['id' => $id]);
        } else {
            $item = ShoppingItem::findOne(['nID' => $id]);
        }

        if(!$item) {
            return ErrorResponseBuilder::buildResponse(404, 'Non existing item.');
        }

        if(!$this->isUserAllowedAccessToComponent($item->groupID)) {
            return ErrorResponseBuilder::buildResponse(403, 'You can not edit items from other groups.');
        }

        $shoppingListID = user()->getShoppingList()->id;
        $shoppingListItem = ShoppingListItem::findOne([
            'shoppingListID' => $shoppingListID,
            'shoppingItemID' => $item->id
        ]);

        if(!$shoppingListItem) {
            return $item;
        }

        $shoppingListItem->delete();

        return $item;
    }
}