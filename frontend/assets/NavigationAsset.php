<?php
/**
 * Created by PhpStorm.
 * Date: 17/04/2017
 * Time: 12:28
 */

namespace frontend\assets;


use yii\web\AssetBundle;

class NavigationAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $css = [];

    public $js = [
        'js/navigation.js'
    ];
    public $depends = [
        'frontend\assets\MaterializeCSSAssets',
    ];

}