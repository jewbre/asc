<?php
namespace console\controllers;


use common\models\User;
use Yii;
use yii\console\Controller;

class RbacController extends Controller
{
    public $defaultAction = 'init';

    public function actionInit()
    {
        $auth = Yii::$app->authManager;

        $admin = $auth->createRole('admin');
        $auth->add($admin);

        $adminUsers = User::find()->where([
            'email' => [
                'vilim.stubican@degordian.com',
                'vilim.stubican@gmail.com',
            ]
        ])
            ->all();

        /** @var User $adminUser */
        foreach ($adminUsers as $adminUser) {
            $auth->assign($admin, $adminUser->id);
        }

    }
}