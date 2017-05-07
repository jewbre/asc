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
use common\models\Budget;
use yii\helpers\ArrayHelper;

class BudgetController extends BaseController
{
    public $modelClass = 'common\models\Budget';

    public function actions()
    {
        return [];
    }

    protected function verbs()
    {
        return ArrayHelper::merge(
            parent::verbs(),
            [
                'mine' => ['GET'],
                'add' => ['POST'],
            ]
        );
    }


    public function actionMine()
    {
        return $this->getUserBudget();
    }

    /**
     * @return Budget
     */
    private function getUserBudget()
    {
        return Budget::findOne(['groupID' => user()->selectedGroupID]);
    }
    public function actionAdd()
    {
        $addAmount = \Yii::$app->getRequest()->post('amount', 0);

        $budget = $this->getUserBudget();
        $budget->amount += $addAmount;

        $budget->update();

        return $budget;
    }
}
