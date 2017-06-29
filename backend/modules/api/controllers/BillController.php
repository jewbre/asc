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
use common\models\Bill;

class BillController extends BaseController
{

    const PER_PAGE = 30;
    public $modelClass = 'common\models\Bill';

    public function actions()
    {
        $actions = array_merge(
            parent::actions(),
            [
                'create' => [
                    'class' => 'backend\modules\api\actions\bill\CreateAction',
                    'modelClass' => $this->modelClass,
                    'checkAccess' => [$this, 'checkAccess'],
                    'scenario' => $this->createScenario,
                ],
                'update' => [
                    'class' => 'backend\modules\api\actions\bill\UpdateAction',
                    'modelClass' => $this->modelClass,
                    'checkAccess' => [$this, 'checkAccess'],
                    'scenario' => $this->updateScenario,
                ],
                'delete' => [
                    'class' => 'backend\modules\api\actions\bill\DeleteAction',
                    'modelClass' => $this->modelClass,
                    'checkAccess' => [$this, 'checkAccess'],
                ],
            ]
        );
        unset($actions['index']);

        return $actions;
    }

    public function actionIndex()
    {
        $page = \Yii::$app->getRequest()->get('page', 1);

        $bills = Bill::find()
            ->where('groupID = :group', [ 'group' => user()->selectedGroupID ])
            ->offset( ($page - 1) * self::PER_PAGE)
            ->orderBy([
                'created_at' => SORT_DESC
            ])
            ->limit(self::PER_PAGE)
            ->all();

        $totalBills = Bill::find()
            ->where('groupID = :group', [ 'group' => user()->selectedGroupID ])
            ->count();

        $totalPages = ceil($totalBills / self::PER_PAGE);

        return [
            'items' => $bills,
            '_pagination' => [
                'totalItems' => $totalBills,
                'totalPages' => $totalPages,
                'currentPage' => $page,
            ]
        ];
    }
}