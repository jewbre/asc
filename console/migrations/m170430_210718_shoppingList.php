<?php

use yii\db\Migration;

class m170430_210718_shoppingList extends Migration
{
    public function safeUp()
    {
        $this->createTable('shoppingList', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
            'groupID' => $this->integer(11)->notNull(),
            'created_at' => $this->integer(11)->notNull(),
            'updated_at' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_shopping_list_to_group', 'shoppingList', 'groupID', 'group', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_shopping_list_to_group', 'shoppingList');
        $this->dropTable('shoppingList');
    }
}
