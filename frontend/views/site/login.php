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

    <p class="grey-text">Please fill out the following fields to login:</p>

    <button id="facebook-login" class="blue fb-btn">Facebook</button>
    <div class="g-signin2 google-btn red" data-onsuccess="onGoogleSignIn"></div>
</div>
