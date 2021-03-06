<?php

/* @var $this \yii\web\View */
/* @var $content string */

use frontend\assets\MaterializeCSSAssets;
use yii\helpers\Html;

MaterializeCSSAssets::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<div class="wrap">
    <?= $content ?>
</div>

<?= $this->render('//layouts/partials/footer') ?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
