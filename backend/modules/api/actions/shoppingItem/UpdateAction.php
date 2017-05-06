<?php
/**
 * Created by PhpStorm.
 * Date: 03/05/2017
 * Time: 23:06
 */

namespace backend\modules\api\actions\shoppingItem;

use common\models\Group;
use common\models\ShoppingCategory;
use common\models\ShoppingItem;
use common\models\User;
use yii\rest\UpdateAction as BaseUpdateAction;
use yii\web\NotFoundHttpException;
use yii\web\UnauthorizedHttpException;

class UpdateAction extends BaseUpdateAction
{
    public function run($id)
    {
        $groupID = user()->selectedGroupID;
        $model = ShoppingItem::findOne(['id' => $id]);
        if(!$model) {
            throw new NotFoundHttpException('Non existing item.');
        }

        /** @var User $user */
        $user = \Yii::$app->getUser()->getIdentity();
        $isAllowedAccess = $user && array_reduce($user->groups, function($acc, Group $group) use ($groupID) {
                return $acc || $groupID == $group->id;
            }, false);

        if(!$isAllowedAccess) {
            throw new UnauthorizedHttpException("You are not authorized to edit other people's items.");
        }

        $groupID = user()->selectedGroupID;
        $category = \Yii::$app->getRequest()->post('category', null);
        if (!is_numeric($category)) {
            $name = trim($category);

            $shoppingCategory = ShoppingCategory::findOne([
                'name' => $name,
                'groupID' => $groupID
            ]);

            if (!$shoppingCategory) {
                $shoppingCategory = new ShoppingCategory();
                $shoppingCategory->setAttributes([
                    'name' => $name,
                    'groupID' => $groupID
                ]);
                $shoppingCategory->save();
            }
        } else {
            $shoppingCategory = ShoppingCategory::findOne([
                'id' => $category
            ]);
        }

        $request = \Yii::$app->getRequest();
        $bodyParams = $request->bodyParams;
        unset($bodyParams['category']);
        $bodyParams['shoppingCategoryID'] = $shoppingCategory->id;
        $bodyParams['groupID'] = $groupID;
        $request->bodyParams = $bodyParams;

        return parent::run($id);
    }


}