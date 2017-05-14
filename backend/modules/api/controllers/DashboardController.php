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

class DashboardController extends BaseController
{
    public $modelClass = 'common\models\BillCategory';

    public function actions()
    {
        return [];
    }

    public function actionIndex()
    {
        $user = user();
        $group = $user->selectedGroup;
        $groups = $user->groups;

        return [
            'user' => $user,
            'group' => $group,
            'groups' => $groups,
            "features" => [
                "shopping_list",
                "expenses",
                "events"
            ],
        ];
    }
}