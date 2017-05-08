<?php
/**
 * Created by PhpStorm.
 * Date: 02/05/2017
 * Time: 00:36
 */

namespace frontend\assets;


use yii\web\AssetBundle;

class BillsAssets extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $js = [
        'static/js/models/Budget.js',
        'static/js/models/Group.js',
        'static/js/models/User.js',
        'static/js/models/Category.js',

        'static/js/models/builders/UserBuilder.js',
        'static/js/models/builders/BudgetBuilder.js',
        'static/js/models/builders/GroupBuilder.js',

        'static/js/utils/Renderer.js',

        'static/js/budget/BillsPresenterImpl.js',
        'static/js/budget/BudgetView.js',
        'js/billsInit.js'
    ];

    public $depends = [
        'frontend\assets\MaterializeCSSAssets'
    ];

}