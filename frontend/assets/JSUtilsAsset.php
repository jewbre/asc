<?php
/**
 * Created by PhpStorm.
 * Date: 01/05/2017
 * Time: 20:59
 */

namespace frontend\assets;
use yii\web\AssetBundle;

class JSUtilsAsset extends AssetBundle
{
    public $basePath = '@webroot/static/js/utils';
    public $baseUrl = '@web/static/js/utils';

    public $js = [
        'ApiService.js'
    ];

    public $depends = [
        'frontend\assets\JqueryAsset'
    ];
}