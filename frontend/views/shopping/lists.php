<?php

/* @var $this yii\web\View */

use frontend\assets\ShoppingListsAssets;

$this->title = 'Shopping lists';

ShoppingListsAssets::register($this);
?>
<div class="row">
    <a href="#" id="goToShopping">
        <i class="material-icons right md-48">playlist_add_check</i>
    </a>
    <a href="#" id="goToCreation">
        <i class="material-icons right md-48">playlist_add</i>
    </a>

</div>
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
                <li class="collection-item avatar valign-wrapper">
                    <i class="material-icons circle deep-purple item-add">add_shopping_cart</i>
                    <i class="material-icons circle deep-purple item-delete md-36">remove_circle</i>
                    <div>
                        <span class="title">Title</span>
                        <p>First Line</p>
                    </div>
                </li>
                <li class="collection-item avatar valign-wrapper">
                    <i class="material-icons circle deep-purple item-add">add_shopping_cart</i>
                    <i class="material-icons circle deep-purple item-delete md-36">remove_circle</i>
                    <div>
                        <span class="title">Title</span>
                        <p>First Line</p>
                    </div>
                </li>
                <li class="collection-item avatar valign-wrapper checked">
                    <i class="material-icons circle deep-purple item-add">add_shopping_cart</i>
                    <i class="material-icons circle deep-purple item-delete md-36">remove_circle</i>
                    <div>
                        <span class="title">Title</span>
                        <p>First Line</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#addNewShoppingListModal" id="addNewItemTrigger">
        <i class="large material-icons">note_add</i>
    </a>
</div>

<!-- Modal Structure -->
<div id="addNewShoppingListModal" class="modal">
    <div class="modal-content">
        <h4>Create new shopping list</h4>
        <div class="row">
            <form class="col s12" id="addNewShoppingListItemForm">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="shopping_item_name" type="text" class="validate">
                        <label for="shopping_item_name">Shopping List Name</label>
                    </div>
                </div>
                <div class="row valign-wrapper" id="categoryNameInput" style="display: none">
                    <div class="input-field col s11">
                        <input id="shopping_category_name" type="text" class="validate">
                        <label for="shopping_category_name">Category name</label>
                    </div>
                    <div class="col s1">
                        <a href="#" id="addNewCategory">
                            <i class="material-icons">done</i>
                        </a>
                        <a href="#" id="cancelAddNewCategory">
                            <i class="material-icons">clear</i>
                        </a>
                    </div>
                </div>
                <div class="row valign-wrapper" id="categoryNameSelect">
                    <div class="input-field col s11">
                        <select id="shopping_item_category">
<!--                            CATEGORIES ARE LOADED VIA AJAX-->
                        </select>
                        <label>Category</label>
                    </div>
                    <div class="col s1">
                        <a href="#" id="showAddNewCategory">
                            <i class="material-icons">library_add</i>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="shopping_item_reminder" class="materialize-textarea" data-length="255"></textarea>
                        <label for="shopping_item_reminder">Details</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        <a href="#!" class="waves-effect waves-green btn-flat" id="editShoppingItemBtn">Update</a>
        <a href="#!" class="waves-effect waves-green btn-flat" id="addNewShoppingItemCreateBtn">Create</a>
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" id="deleteShoppingItemBtn">Delete</a>
    </div>
</div>
