<?php

/* @var $this yii\web\View */

use frontend\assets\BillsAssets;

$this->title = 'Bills';

BillsAssets::register($this);
?>
<div class="fixed-scroll">
    <div class="row deep-purple white-text center-align budget">
        <span>Current budget</span>
        <h3 id="budget-amount">
            <!-- LOADED FROM API-->
        </h3>
    </div>
    <div class="row">
        <div class="col s12 m12 l12 center-align green-text" id="debt-message">
            <h5>
                <!-- LOADED FROM API-->
            </h5>
        </div>

        <ul class="col s12 collection ious-list" id="debt-list">
            <!-- LOADED FROM API-->
        </ul>
    </div>
</div>
<div class="bottom-drawer">
    <div class="row" id="billsHolder">
        <!--        Bills are comming from api-->
    </div>
    <button id="loadMoreBills" class="btn deep-purple">Load more</button>
</div>

