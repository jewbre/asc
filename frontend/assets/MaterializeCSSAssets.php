<?php
/**
 * Created by PhpStorm.
 * Date: 17/04/2017
 * Time: 12:28
 */

namespace frontend\assets;


use yii\web\AssetBundle;

class MaterializeCSSAssets extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $css = [
        'css/ghpages-materialize.css',
        'css/materialize.css'
    ];

    public $js = [
        'js/materialize.js'
    ];
    public $depends = [
        'frontend\assets\JqueryAsset',
    ];

}