<?php
use common\models\User;

/**
 * @return User|\yii\web\IdentityInterface
 */
function user() {
    return \Yii::$app->getUser()->getIdentity();
}
/**
 * @return string
 */
function param($key) {
    return \Yii::$app->params[$key];
}