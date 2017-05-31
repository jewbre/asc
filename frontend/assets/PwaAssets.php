<?php
/**
 * Created by PhpStorm.
 * Date: 02/05/2017
 * Time: 00:36
 */

namespace frontend\assets;


use yii\web\AssetBundle;

class PwaAssets extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $js = [
        'js/pwa.js'
    ];

    public $depends = [
        'frontend\assets\JqueryAsset'
    ];

}