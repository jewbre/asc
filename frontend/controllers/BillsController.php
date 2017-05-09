<?php
/**
 * Created by PhpStorm.
 * Date: 01/05/2017
 * Time: 19:43
 */

namespace frontend\controllers;

use frontend\models\navigation\ViewModelFactory as NavigationViewModelFactory;
use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\web\Controller;

class BillsController extends Controller
{
    public function init()
    {
        parent::init();

        if (Yii::$app->user->isGuest) {
            $this->layout = 'logged-out';
        } else {
            $this->layout = 'main';
            $this->view->params['navigationViewModel'] = (new NavigationViewModelFactory())->generateViewModel();
        }
    }


    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout', 'index'],
                'rules' => [
                    [
                        'actions' => ['index', 'logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    public function actionIndex()
    {
        $this->view->params['actionPartial'] = [
            'name' => '//bills/navbar-actions',
            'data' => []
        ];

        $this->view->params['modals'] = [
            '//bills/create-new-bill',
            '//bills/add-to-budget-modal',
            '//bills/clear-debts',
        ];

        return $this->render('index');
    }

}