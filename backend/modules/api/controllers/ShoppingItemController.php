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
use common\models\ShoppingItem;
use common\models\ShoppingListItem;
use yii\helpers\ArrayHelper;
use yii\web\NotFoundHttpException;
use yii\web\UnauthorizedHttpException;

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
                ],
                'update' => [
                    'class' => 'backend\modules\api\actions\shoppingItem\UpdateAction',
                    'modelClass' => $this->modelClass,
                    'checkAccess' => [$this, 'checkAccess'],
                    'scenario' => $this->updateScenario,
                ],
            ]
        );
    }

    public function actionFinishShopping()
    {
        $items = \Yii::$app->getRequest()->post('items', []);

        if (!empty($items)) {

            $items = array_filter($items, function ($item) {
                return $item['isChecked'] == 'true' && $item['isBought'] == 'true';
            });
            $itemsIDs = array_map(function ($item) {
                return $item['id'];
            }, $items);

            ShoppingItem::updateAll(['lastBought' => time()],
                [
                    'and',
                    ['in', 'id', $itemsIDs],
                    'groupID' => user()->selectedGroupID
                ]);
            ShoppingListItem::deleteAll(
                [
                    'and',
                    ['in', 'shoppingItemID', $itemsIDs],
                    'shoppingListID' => user()->getShoppingList()->id
                ]);
        }

        return ShoppingItem::findAll(['groupID' => user()->selectedGroupID]);
    }

    public function actionCheck($id)
    {
        if (is_numeric($id)) {
            $item = ShoppingItem::findOne(['id' => $id]);
        } else {
            $item = ShoppingItem::findOne(['nID' => $id]);
        }

        if (!$item) {
            throw new NotFoundHttpException('Non existing item.');
        }

        if (!$this->isUserAllowedAccessToComponent($item->groupID)) {
            throw new UnauthorizedHttpException('You can not edit items from other groups.');
        }

        $shoppingListID = user()->getShoppingList()->id;
        $shoppingListItem = ShoppingListItem::findOne([
            'shoppingListID' => $shoppingListID,
            'shoppingItemID' => $item->id
        ]);

        if ($shoppingListItem) {
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
        if (is_numeric($id)) {
            $item = ShoppingItem::findOne(['id' => $id]);
        } else {
            $item = ShoppingItem::findOne(['nID' => $id]);
        }

        if (!$item) {
            return ErrorResponseBuilder::buildResponse(404, 'Non existing item.');
        }

        if (!$this->isUserAllowedAccessToComponent($item->groupID)) {
            return ErrorResponseBuilder::buildResponse(403, 'You can not edit items from other groups.');
        }

        $shoppingListID = user()->getShoppingList()->id;
        $shoppingListItem = ShoppingListItem::findOne([
            'shoppingListID' => $shoppingListID,
            'shoppingItemID' => $item->id
        ]);

        if (!$shoppingListItem) {
            return $item;
        }

        $shoppingListItem->delete();

        return $item;
    }

    protected function verbs()
    {
        return
            ArrayHelper::merge(
                parent::verbs(),
                [
                    'finish-shopping' => ['POST']
                ]
            );
    }
}