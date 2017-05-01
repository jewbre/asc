<?php
/**
 * Created by PhpStorm.
 * Date: 01/05/2017
 * Time: 19:43
 */

namespace frontend\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\web\Controller;
use frontend\models\navigation\ViewModelFactory as NavigationViewModelFactory;

class ShoppingController extends Controller
{
    public function init()
    {
        parent::init();

        if(Yii::$app->user->isGuest) {
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
                'only' => ['logout', 'signup'],
                'rules' => [
                    [
                        'actions' => ['signup'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['lists'],
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

    public function actionLists()
    {
        return $this->render('lists');
    }

}