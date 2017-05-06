<?php

use yii\db\Migration;

class m170506_142215_detailsOnShoppingItem extends Migration
{
    public function safeUp()
    {
        $this->addColumn('shoppingItem','details', $this->string(255)->null());
    }

    public function safeDown()
    {
        $this->dropColumn('shoppingItem', 'details');
    }
}
