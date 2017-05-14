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
use common\models\Event;
use common\models\RepeatableEvent;
use Couchbase\Exception;
use yii\web\BadRequestHttpException;

class EventController extends BaseController
{
    public $modelClass = 'common\models\Event';

    public function actions()
    {
        $actions = array_merge(
            parent::actions(),
            [
                'create' => [
                    'class' => 'backend\modules\api\actions\event\CreateAction',
                    'modelClass' => $this->modelClass,
                    'checkAccess' => [$this, 'checkAccess'],
                    'scenario' => $this->createScenario,
                ],
                'update' => [
                    'class' => 'backend\modules\api\actions\event\UpdateAction',
                    'modelClass' => $this->modelClass,
                    'checkAccess' => [$this, 'checkAccess'],
                    'scenario' => $this->updateScenario,
                ],
            ]
        );
        unset($actions['index']);

        return $actions;
    }

    public function actionUnscheduled()
    {
        $events = Event::find()->where( 'created_at IS NULL')->all();
        return $events;
    }

    public function actionScheduled()
    {
        $from = \Yii::$app->getRequest()->get('from', -1);
        $to = \Yii::$app->getRequest()->get('to', -1);

        if ($from == -1 || $to == -1) {
            throw new BadRequestHttpException('Please provide from and to dates.');
        }
        try {
            $from = new \DateTime($from);
            $to = new \DateTime($to);
        } catch (Exception $e) {
            throw new BadRequestHttpException('Invalid date format.');
        }

        RepeatableEvent::generateForPeriod($from->getTimestamp(), $to->getTimestamp());

        $events = Event::find()->where(
            'created_at IS NOT NULL AND created_at >= :from AND created_at < :to',
            [
                'from' => $from->getTimestamp(),
                'to' => $to->getTimestamp(),
            ])->all();

        return $events;
    }
}