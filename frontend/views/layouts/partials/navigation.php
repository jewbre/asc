<?php
use frontend\models\navigation\ViewModel;
use yii\helpers\Url;

/** @var ViewModel $viewModel */

?>
<!--DESKTOP MENU-->
<ul class="side-nav fixed" id="desktop-side-navigation">
    <li>
        <div class="userView">
            <div class="background">
                <img src="<?= Yii::getAlias('@web/static/images/office.jpg') ?>">
            </div>
            <a href="#!user"><img class="circle" src="<?= $viewModel->getAvatar() ?>"></a>
            <a href="#!name"><span class="white-text name"><?= $viewModel->getUsername() ?></span></a>
            <a href="#!email"><span class="white-text email"><?= $viewModel->getEmail() ?></span></a>

            <!-- Groups Dropdown Trigger -->
            <div class='dropdown-button link' href='#' data-activates='groupDropdown'>
                <span class="white-text valign-wrapper">
                    <?= $viewModel->getSelectedGroup()['name'] ?>
                    <i class="material-icons right white-text">list</i>
                </span>
            </div>
        </div>
        <!-- Dropdown Structure -->
        <ul id='groupDropdown' class='dropdown-content'>
            <?php foreach ($viewModel->getGroups() as $group) { ?>
                <li>
                    <a href="#" class="select-group" data-id="<?= $group['id'] ?>"><?= $group['name'] ?></a>
                </li>
            <?php } ?>
            <li>
                <a href="#addNewGroupModal" class="modal-trigger">
                    <i class="material-icons left white-text">plus</i>
                    Add new group
                </a>
            </li>
        </ul>
    </li>
    <li>
        <?php if (!empty($viewModel->getFeatures())) { ?>
            <span class="subheader">Features</span>
            <ul>
                <?php foreach ($viewModel->getFeatures() as $feature) { ?>
                    <li><a href="<?= $feature['link'] ?>"><?= $feature['name'] ?></a></li>
                <?php } ?>
            </ul>
        <?php } ?>
    </li>
    <li>
        <div class="divider"></div>
        <span class="subheader">Settings</span>
    </li>
    <li><a href="#userSettingsModal" class="modal-trigger">Settings</a></li>
    <li><a href="<?= Url::to(['/site/logout']);?>">Logout</a></li>
</ul>
<!--/DESKTOP MENU-->

