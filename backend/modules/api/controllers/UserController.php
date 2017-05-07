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
use common\models\User;

class UserController extends BaseController
{
    public $modelClass = 'common\models\User';

    // TODO: add registration and login actions

    public function actions()
    {
        // Disable all actions, enable only custom.
        return [];
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

    public function actionMe()
    {
        $me = \user();
        return [
            'id' => $me->id,
            'username' => $me->username,
            'avatar' => $me->getAvatar(),
        ];
    }
}
