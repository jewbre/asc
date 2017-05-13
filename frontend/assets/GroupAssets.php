<?php
/**
 * Created by PhpStorm.
 * Date: 02/05/2017
 * Time: 00:36
 */

namespace frontend\assets;


use yii\web\AssetBundle;

class GroupAssets extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $js = [
        'static/js/models/Group.js',

        'static/js/models/builders/GroupBuilder.js',

        'static/js/group/GroupPresenter.js',
        'static/js/group/GroupView.js',
        'js/groupInit.js'
    ];

    public $depends = [
        'frontend\assets\MaterializeCSSAssets'
    ];

}