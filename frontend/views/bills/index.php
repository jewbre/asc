<?php

/* @var $this yii\web\View */

use frontend\assets\BillsAssets;

$this->title = 'Bills';

BillsAssets::register($this);
?>
<div class="fixed-scroll">
    <div class="row deep-purple white-text center-align budget">
        <span>Current budget</span>
        <h3 id="budget-amount">4333.32 kn</h3>
    </div>
    <div class="row">
        <div class="col s12 m12 l12 center-align green-text">
            <h5>You will get 2188.00</h5>
        </div>

        <ul class="col s12 collection ious-list">
            <?php
            $items = ['surplus', 'deficit', 'surplus', 'deficit'];
            foreach ($items as $item) {
                ?>
                <li class="col s12 l6 row valign-wrapper collection-item <?= $item ?>">
                    <div class="col s3 l3">
                        <img class="circle" src="https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"/>
                    </div>
                    <div class="col s5 l5">
                        <p class="title">Vilim</p>
                    </div>
                    <div class="col s4 l3">
                        <span class="right">4333.20 kn</span>
                    </div>
                </li>
                <?php
            }
            ?>
        </ul>
    </div>
</div>
<div class="bottom-drawer">
    <div class="row" id="billsHolder">
<!--        Bills are comming from api-->
    </div>

</div>

