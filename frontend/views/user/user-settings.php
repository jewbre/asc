<?php
/**
 * @var ViewModel $viewModel
 */
?>
<!-- Modal Structure -->
<div id="userSettingsModal" class="modal">
    <div class="modal-content">
        <h4>Update user settings</h4>
        <div class="row">
            <form class="col s12" id="userSettingsForm">
                <div class="row">
                    <div class="input-field col s12 m12 l12">
                        <input type="text" id="user_name" class="materialize-textarea"/>
                        <label for="user_name">Username</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        <a href="#!" class="waves-effect waves-green btn-flat" id="updateUserBtn">Update</a>
    </div>
</div>