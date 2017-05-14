<?php
/**
 * Created by PhpStorm.
 * Date: 03/05/2017
 * Time: 23:06
 */

namespace backend\modules\api\actions\shoppingItem;

use common\models\ShoppingCategory;
use yii\rest\CreateAction as BaseCreateAction;

class CreateAction extends BaseCreateAction
{
    public function run()
    {
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
        $bodyParams['lastBought'] = 0;
        $bodyParams['shoppingCategoryID'] = $shoppingCategory->id;
        $bodyParams['groupID'] = $groupID;
        $request->bodyParams = $bodyParams;

        return parent::run();
    }


}