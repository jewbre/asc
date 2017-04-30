<?php

use yii\db\Migration;

class m170430_210725_shoppingListItem extends Migration
{
    public function safeUp()
    {
        $this->createTable('shoppingListItem', [
            'id' => $this->primaryKey(),
            'shoppingListID' => $this->integer(11)->notNull(),
            'shoppingItemID' => $this->integer(11)->notNull(),
            'reminder' => $this->string(1023)->notNull()->defaultValue(''),
            'isChecked' => $this->smallInteger(1)->defaultValue(0)
        ]);

        $this->addForeignKey('fk_shopping_list_item_to_shopping_list', 'shoppingListItem', 'shoppingListID', 'shoppingList', 'id', 'CASCADE');
        $this->addForeignKey('fk_shopping_list_item_to_shopping_item', 'shoppingListItem', 'shoppingItemID', 'shoppingItem', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_shopping_list_item_to_shopping_item', 'shoppingListItem');
        $this->dropForeignKey('fk_shopping_list_item_to_shopping_list', 'shoppingListItem');
        $this->dropTable('shoppingListItem');
    }
}
