<?php

/* @var $this \yii\web\View */
/* @var $content string */

use frontend\assets\LoginAssets;
use frontend\assets\MaterializeCSSAssets;
use yii\helpers\Html;
use yii\helpers\Json;
use yii\helpers\Url;

MaterializeCSSAssets::register($this);
LoginAssets::register($this);
?>
<?php $this->beginPage() ?>
<!--<!DOCTYPE html>-->
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>

    <meta name="google-signin-client_id" content="<?= param('googleClientID')?>">

    <script type="application/json" id="api-base-path"><?= Json::encode(param('apiUrl'))?></script>

    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<div class="login-container center-align white-text" style="background-image: url(<?= Yii::getAlias('@web/images/background.jpg')?>)">
    <div class="overlay deep-purple"></div>
    <div class="login-content-container">
        <?= $content ?>
    </div>
</div>

<?= $this->render('//layouts/partials/footer') ?>

<script>
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '<?= param('facebookAppID')?>',
            xfbml      : true,
            version    : 'v2.9'
        });
        FB.AppEvents.logPageView();
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
<script src="https://apis.google.com/js/platform.js" async defer></script>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
