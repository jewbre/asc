<?php

/* @var $this \yii\web\View */
/* @var $content string */

use frontend\assets\LoginAssets;
use frontend\assets\MaterializeCSSAssets;
use yii\helpers\Html;
use yii\helpers\Json;

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

    <script type="application/json" id="api-base-path"><?= Json::encode('/asc/backend/web/api')?></script>

    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<div class="wrap">
    <?= $content ?>
</div>

<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; My Company <?= date('Y') ?></p>

        <p class="pull-right"><?= Yii::powered() ?></p>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
