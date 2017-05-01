<?php

/* @var $this yii\web\View */

use frontend\assets\ShoppingListsAssets;

$this->title = 'Shopping lists';

ShoppingListsAssets::register($this);
?>
<div class="row">
    <div class="col s12">
        <ul class="tabs">
            <li class="tab col s6"><a class="active" href="#unfinishedListsTab">Shopping lists</a></li>
            <li class="tab col s6"><a href="#finishedListsTab">Finished lists</a></li>
        </ul>
    </div>
    <div id="unfinishedListsTab">
        <ul>
            <li>
                <div class="row shopping-card">
                    <div class="col s12 m12 l12">
                        <div class="card blue-grey darken-1 hoverable">
                            <div class="card-content white-text">
                                <p class="inline-block">Unfinished lists tab</p>
                                <div class="right">
                                    <a href="#"><i class="material-icons left">done_all</i></a>
                                    <a href="#"><i class="material-icons left">mode_edit</i></a>
                                    <a href="#"><i class="material-icons left">delete</i></a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </li>
        </ul>
    </div>
    <div id="finishedListsTab">
        <ul>
            <li>
                <div class="row shopping-card">
                    <div class="col s12 m12 l12">
                        <div class="card blue-grey darken-1 hoverable">
                            <div class="card-content white-text valign-wrapper">
                                <p>Finished lists tab</p>
                                <i class="material-icons right">done_all</i>
                                <i class="material-icons right">mode_edit</i>
                                <i class="material-icons right">delete</i>
                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</div>

<div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#addNewShoppingListModal">
        <i class="large material-icons">note_add</i>
    </a>
</div>

<!-- Modal Structure -->
<div id="addNewShoppingListModal" class="modal">
    <div class="modal-content">
        <h4>Create new shopping list</h4>
        <div class="row">
            <form class="col s12" id="addNewShoppingListForm">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="shopping_list_name" type="text" class="validate">
                        <label for="shopping_list_name">Shopping List Name</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        <a href="#!" class="waves-effect waves-green btn-flat" id="addNewShoppingListCreateBtn">Create</a>
    </div>
</div>
