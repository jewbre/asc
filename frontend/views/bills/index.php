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
    <div class="row">
        <?php
        $items = ['May 2017' => 3, 'April 2017' => 2, 'March 2017' => 5];
        foreach ($items as $key => $repeat) {
            ?>
            <ul class="col s12">
                <p class="bill-card-title"><?= $key ?></p>
                <?php
                for ($i = 0; $i < $repeat; $i++) {
                    $rand = random_int(1, 5);
                    ?>
                    <li class="card col s12 l6 row valign-wrapper bill-card">
                        <div class="col s3 l3 bill-participants">
                            <img class="circle main"
                                 src="https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"/>
                            <img class="circle first"
                                 src="https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"/>
                            <?php if ($rand > 1) { ?>
                                <?php if ($rand > 2) { ?>
                                    <img class="circle second"
                                         src="https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"/>
                                <?php } ?>

                                <?php if ($rand == 2) { ?>
                                    <img class="circle third"
                                         src="https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"/>
                                <?php } elseif ($rand == 3) { ?>
                                    <img class="circle third"
                                         src="https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"/>
                                <?php } elseif ($rand > 3) { ?>
                                    <span class="deep-purple white-text third">
                                    +<?= $rand - 3 ?>
                                </span>
                                <?php } ?>

                            <?php } ?>


                        </div>
                        <div class="col s5 l5">
                            <span class="category deep-purple-text">Hrana</span>
                            <span class="description">Vilim</span>
                            <span class="date">20.03.2017.</span>
                        </div>
                        <div class="col s4 l3">
                            <span class="amount">4333.20 kn</span>
                        </div>
                    </li>
                    <?php
                }
                ?>
            </ul>

            <?php
        }
        ?>
    </div>

</div>

