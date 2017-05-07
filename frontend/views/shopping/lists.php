<?php

/* @var $this yii\web\View */

use frontend\assets\ShoppingListsAssets;

$this->title = 'Shopping lists';

ShoppingListsAssets::register($this);
?>
<div class="row">
    <ul id="tabs-swipe-demo" class="tabs" style="display: none">
        <li class="tab col s3"><a href="#tab1">Creating</a></li>
        <li class="tab col s3"><a href="#tab2">Shopping</a></li>
    </ul>
    <div class="col s12" id="tab1">
        <div class="row container" id="itemsHolder">
            <!--    HERE ITEMS GO-->
        </div>
    </div>

    <div class="col s12" id="tab2">
        <div class="row container" id="shoppingList">
            <ul class="collection" id="shoppingListHolder">
<!--                HERE SHOPPING ITEM GO-->
            </ul>
        </div>
    </div>
</div>

<div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#addNewShoppingListModal" id="addNewItemTrigger">
        <i class="large material-icons">note_add</i>
    </a>
</div>

<?= $this->render('//shopping/add-new-item-modal')?>
