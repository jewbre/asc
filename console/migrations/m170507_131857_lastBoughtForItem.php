<?php

use yii\db\Migration;

class m170507_131857_lastBoughtForItem extends Migration
{
    public function safeUp()
    {
        $this->addColumn('shoppingItem', 'lastBought', $this->integer(11)->defaultValue(0));
    }

    public function safeDown()
    {
        $this->dropColumn('shoppingItem', 'lastBought');
    }
}
