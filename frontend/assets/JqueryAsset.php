<?php
/**
 * Created by PhpStorm.
 * Date: 17/04/2017
 * Time: 12:35
 */

namespace frontend\assets;


use yii\web\AssetBundle;

class JqueryAsset extends AssetBundle
{
    public $basePath = '@webroot/js';
    public $baseUrl = '@web/js';

    public $js = [
        'jquery/jquery.js'
    ];

    public $depends = [
        'yii\web\YiiAsset',
    ];
}