<?php
/**
 * Created by PhpStorm.
 * Date: 03/05/2017
 * Time: 22:16
 */

namespace backend\modules\api\controllers\base;


use common\models\Group;
use common\models\User;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use yii\helpers\ArrayHelper;

abstract class BaseController extends \yii\rest\ActiveController
{

    public function init()
    {
        parent::init();
        \Yii::$app->user->enableSession = false;
    }

    public function behaviors()
    {
        $behaviors = parent::behaviors();

        $behaviors['corsFilter'] = ArrayHelper::merge($behaviors['corsFilter'], [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                // restrict access to domains:
                'Origin' => static::allowedDomains(),
                'Access-Control-Request-Method' => ['POST', 'PUT', 'DELETE', 'GET', 'OPTIONS'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 3600,                 // Cache (seconds)

            ],
        ]);

        $behaviors['authenticator'] = [
            'class' => CompositeAuth::className(),
            'authMethods' => [
                HttpBasicAuth::className(),
                HttpBearerAuth::className(),
                QueryParamAuth::className(),
            ],
        ];
        return $behaviors;
    }

    protected function allowedDomains()
    {
        return [
            'http://localhost',
            'http://roomero.co',
        ];
    }

    /**
     * @param $groupID
     * @return bool
     */
    public function isUserAllowedAccessToComponent($groupID)
    {
        /** @var User $user */
        $user = \Yii::$app->getUser()->getIdentity();
        return $user && array_reduce($user->groups, function ($acc, Group $group) use ($groupID) {
                return $acc || $groupID == $group->id;
            }, false);
    }
}