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

    /**
     * @param $groupID
     * @return bool
     */
    public function isUserAllowedAccessToComponent($groupID)
    {
        /** @var User $user */
        $user = \Yii::$app->getUser()->getIdentity();
        return $user && array_reduce($user->groups, function($acc, Group $group) use ($groupID) {
                    return $acc || $groupID == $group->id;
            }, false);
    }
}