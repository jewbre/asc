<?php
/**
 * @var ViewModel $viewModel
 */
use common\models\User;
use frontend\models\navigation\ViewModel;
use yii\helpers\Json;

$userList = array_reduce($viewModel->getUsers(), function ($acc, User $user) {
    if(user()->id != $user->id) {
        $acc[$user->email] = $user->getAvatar();
    }
    return $acc;
}, []);
?>

<script id="user-list" type="application/json"><?= Json::encode(
        $userList
    ) ?></script>
<!-- Modal Structure -->
<div id="addNewGroupModal" class="modal">
    <div class="modal-content">
        <h4>Create new group</h4>
        <div class="row">
            <form class="col s12" id="createNewGroupForm">
                <div class="row">
                    <div class="input-field col s12 m12 l12">
                        <input type="text" id="group_name" class="materialize-textarea"/>
                        <label for="group_name">Name</label>
                    </div>
                </div>
                <div class="col s12">
                    <ul class="collection">
                        <li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div></li>
                    </ul>

                </div>
                <div class="input-field col s12">
                    <input type="text" id="member" class="autocomplete">
                    <label for="member">Members</label>
                </div>
            </form>
        </div>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        <a href="#!" class="waves-effect waves-green btn-flat" id="createGroupBtn">Create</a>
    </div>
</div>