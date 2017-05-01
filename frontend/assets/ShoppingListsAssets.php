<?php
/**
 * Created by PhpStorm.
 * Date: 02/05/2017
 * Time: 00:36
 */

namespace frontend\assets;


use yii\web\AssetBundle;

class ShoppingListsAssets extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $js = [
        'static/js/shopping-list/ShoppingListView.js',
        'static/js/shopping-list/ShoppingListPresenter.js',
        'js/shoppingListsInit.js'
    ];

    public $depends = [
        'frontend\assets\MaterializeCSSAssets'
    ];

}