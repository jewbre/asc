<?php

use yii\db\Migration;

class m170507_135027_billCategory extends Migration
{
    public function safeUp()
    {
        $this->createTable('billCategory', [
           'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'groupID' => $this->integer(11)->notNull(),
            'created_at' => $this->integer(11)->notNull(),
            'updated_at' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_bill_category_to_group', 'billCategory', 'groupID', 'group', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_bill_category_to_group', 'billCategory');
        $this->dropTable('billCategory');
    }
}
