<?php

use yii\db\Migration;

class m170430_210713_shoppingItem extends Migration
{
    public function safeUp()
    {
        $this->createTable('shoppingItem', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
            'shoppingCategoryID' => $this->integer(11)->notNull(),
            'groupID' => $this->integer(11)->notNull(),
            'created_at' => $this->integer(11)->notNull(),
            'updated_at' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_shopping_item_to_category', 'shoppingItem', 'shoppingCategoryID', 'shoppingCategory', 'id', 'CASCADE');
        $this->addForeignKey('fk_shopping_item_to_group', 'shoppingItem', 'groupID', 'group', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_shopping_item_to_group', 'shoppingItem');
        $this->dropForeignKey('fk_shopping_item_to_category', 'shoppingItem');
        $this->dropTable('shoppingItem');
    }
}
