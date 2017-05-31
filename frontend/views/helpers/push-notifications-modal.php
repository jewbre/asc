<?php
use frontend\assets\PwaAssets;

PwaAssets::register($this);
?>

<!-- Modal Structure -->
<div id="pwa-modal" class="modal">
    <div class="modal-content">
        <h4>Push notifications</h4>
        <p>We would like to give you and opportunity to have live syncing with other users that will be in your groups.</p>
        <p>To make this possible, we are using modern web technology called Push notifications.</p>
        <p>It will receive updates in the background as necessary and, in some cases, let you know that there are some new updates in the app.</p>
        <br>
        <p>Do you want to receive cool new stuff?</p>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">No</a>
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" data-id="confirm">Yes</a>
    </div>
</div>
