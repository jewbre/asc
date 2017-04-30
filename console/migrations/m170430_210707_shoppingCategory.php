<?php

use yii\db\Migration;

class m170430_210707_shoppingCategory extends Migration
{
    public function safeUp()
    {
        $this->createTable('shoppingCategory', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
            'groupID' => $this->integer(11)->notNull(),
            'created_at' => $this->integer(11)->notNull(),
            'updated_at' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_shopping_category_to_group', 'shoppingCategory', 'groupID', 'group', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_shopping_category_to_group', 'shoppingCategory');
        $this->dropTable('shoppingCategory');
    }
}
