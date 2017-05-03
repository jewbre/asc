<?php

use yii\db\Migration;

class m170503_195838_nonexistingItemsId extends Migration
{
    public function safeUp()
    {
        $this->addColumn('shoppingListItem', 'nID', $this->string(255)->null());
    }

    public function safeDown()
    {
        $this->dropColumn('shoppingListItem', 'nID');
    }
}
