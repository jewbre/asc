<?php
/**
 * Created by PhpStorm.
 * Date: 17/04/2017
 * Time: 12:37
 */

namespace frontend\assets;


class YiiAsset extends \yii\web\YiiAsset
{
    public $depends = [
        'frontend\assets\JqueryAsset'
    ];
}