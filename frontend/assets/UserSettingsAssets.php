<?php
/**
 * Created by PhpStorm.
 * Date: 02/05/2017
 * Time: 00:36
 */

namespace frontend\assets;


use yii\web\AssetBundle;

class UserSettingsAssets extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $js = [
        'static/js/models/User.js',

        'static/js/models/builders/UserBuilder.js',

        'static/js/user/UserSettingsPresenter.js',
        'static/js/user/UserSettingsView.js',
        'js/userSettingsInit.js'
    ];

    public $depends = [
        'frontend\assets\MaterializeCSSAssets'
    ];

}