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
use common\models\Debt;
use common\models\User;
use yii\helpers\ArrayHelper;
use yii\web\NotFoundHttpException;

class DebtController extends BaseController
{
    public $modelClass = 'common\models\Debt';

    public function actions()
    {
        return [];
    }

    public function actionIndex()
    {
        $debts = Debt::find()
            ->where('groupID = :group AND (firstPersonID = :user OR secondPersonID = :user)', [
                'group' => user()->selectedGroupID,
                'user' => user()->id,
            ])->all();

        return $debts;
    }

    public function actionClear()
    {
        $participants = \Yii::$app->getRequest()->post('participants', []);


        if(!$participants) {
            $participants = [];
        }

        if(!is_array($participants)) {
            $participants = [$participants];
        }

        $me = user();
        $groupID = $me->selectedGroupID;
        foreach ($participants as $p) {
            $participant = User::findOne(['id' => $p]);

            if ($me->id < $participant->id) {
                $firstPerson = $me;
                $secondPerson = $participant;
            } else {
                $firstPerson = $participant;
                $secondPerson = $me;
            }

            /** @var Debt $dept */
            $dept = Debt::findOne([
                'firstPersonID' => $firstPerson->id,
                'secondPersonID' => $secondPerson->id,
                'groupID' => $groupID
            ]);

            if ($dept) {
                $dept->amount = 0;
                $dept->save();
            }
        }

        return $this->actionIndex();
    }

    protected function verbs()
    {
        return ArrayHelper::merge(
            parent::verbs(),
            [
                'index' => ['GET'],
                'clear' => ['POST'],
            ]
        );
    }
}
