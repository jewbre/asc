<?php
/**
 * Created by PhpStorm.
 * Date: 09/05/2017
 * Time: 20:31
 */

namespace frontend\assets;


use yii\web\AssetBundle;

class LoginAssets extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $js = [
        'js/loginInit.js',
        'static/js/utils/LoginApiService.js'
    ];

    public $depends = [
        'frontend\assets\JqueryAsset'
    ];
}