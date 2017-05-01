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
use common\models\User;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;

class UserController extends \yii\rest\ActiveController
{
    public $modelClass = 'common\models\User';

    // TODO: add registration and login actions

    public function actions()
    {
        // Disable all actions, enable only custom.
        return [];
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

    public function actionSearch($query)
    {
        $users = User::find()
            ->where('email like :query', ['query' => '%' . $query . '%'])
            ->limit(10)
            ->orderBy(['length(email)' => SORT_ASC])
            ->all();

        return $users;
    }
}
