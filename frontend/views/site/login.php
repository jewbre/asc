<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \common\models\LoginForm */

use yii\helpers\Html;

$this->title = 'Roomero';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-login">
    <h1><?= Html::encode($this->title) ?></h1>

    <p class="grey-text subtitle">Relax and enjoy you life with other people.</p>

    <button id="facebook-login" class="fb-btn">Facebook</button>
    <div class="g-signin2 google-btn" data-onsuccess="onGoogleSignIn">Google</div>
</div>
