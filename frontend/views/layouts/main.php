<?php

/* @var $this \yii\web\View */
/* @var $content string */

use frontend\assets\MaterializeCSSAssets;
use frontend\assets\NavigationAsset;
use frontend\assets\JSUtilsAsset;
use yii\helpers\Html;
use yii\helpers\Json;

MaterializeCSSAssets::register($this);
NavigationAsset::register($this);
JSUtilsAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <?php $this->head() ?>

    <script type="application/json" id="api-token"><?= Json::encode(Yii::$app->user->getIdentity()->getAuthKey())?></script>
    <script type="application/json" id="api-base-path"><?= Json::encode('/asc/backend/web/api')?></script>
</head>
<body>
<?php $this->beginBody() ?>

<div class="row main-content-wrapper navbar-fixed">
    <nav class="valign-wrapper deep-purple">
        <a href="#" data-activates="mobile-navigation" class="button-collapse"><i class="material-icons">menu</i></a>
        <div class="container center-align">
            <h5>Roomero</h5>
        </div>
        <?php
            if(isset($this->params['actionPartial'])) {
                $partialName = $this->params['actionPartial']['name'];
                $partialData = $this->params['actionPartial']['data'];
                echo $this->render($partialName, $partialData);
            }
        ?>
    </nav>
    <div class="col s12 m12 l12 no-padding main-content" style="position: relative">
        <?= $content ?>
    </div>
</div>

<?php
    if(isset($this->params['modals']) && !empty($this->params['modals'])) {
        foreach ($this->params['modals'] as $modalPath) {
            echo $this->render($modalPath);
        }
    }
?>
<header>
    <?= $this->render('//layouts/partials/navigation', ['viewModel' => $this->params['navigationViewModel']]) ?>
    <?= $this->render('//layouts/partials/mobile-navigation', ['viewModel' => $this->params['navigationViewModel']]) ?>
</header>

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
