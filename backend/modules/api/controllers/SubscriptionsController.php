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
use common\models\Subscription;
use yii\helpers\Json;

class SubscriptionsController extends BaseController
{
    public $modelClass = 'common\models\Subscription';

    public function actions()
    {
        return [];
    }

    public function actionPwa()
    {
        $data = JSON::encode(\Yii::$app->request->bodyParams);

        $subscription = Subscription::findOne([
            'data' => $data,
            'userID' => user()->id,
            'type' => Subscription::WEB,
        ]);

        if (!$subscription) {
            $subscription = new Subscription();
            $subscription->setAttributes([
                'data' => $data,
                'userID' => user()->id,
                'type' => Subscription::WEB,
            ]);
            $subscription->save();
        }
    }

    protected function verbs()
    {
        return [
            'pwa' => ['POST']
        ];
    }
}