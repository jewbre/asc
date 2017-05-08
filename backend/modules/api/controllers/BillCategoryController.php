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
use common\models\BillCategory;

class BillCategoryController extends BaseController
{
    public $modelClass = 'common\models\BillCategory';

    public function actions()
    {
        $actions = parent::actions();

        unset($actions['index']);
        unset($actions['create']);
        unset($actions['update']);

        return $actions;
    }

    public function actionIndex()
    {
        return BillCategory::findAll(['groupID' => user()->selectedGroupID]);
    }
}