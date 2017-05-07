<?php

use yii\db\Migration;

class m170507_135034_bill extends Migration
{
    public function safeUp()
    {
        $this->createTable('bill', [
            'id' => $this->primaryKey(),
            'description' => $this->string()->notNull(),
            'amount' => $this->decimal(16,2)->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
            'categoryID' => $this->integer()->notNull(),
            'payerID' => $this->integer()->notNull(),
            'groupID' => $this->integer()->notNull(),
        ]);

        $this->addForeignKey('fk_bill_to_bill_category', 'bill', 'categoryID', 'billCategory', 'id');
        $this->addForeignKey('fk_bill_to_user', 'bill', 'payerID', 'user', 'id');
        $this->addForeignKey('fk_bill_to_group', 'bill', 'groupID', 'group', 'id');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_bill_to_group', 'bill');
        $this->dropForeignKey('fk_bill_to_user', 'bill');
        $this->dropForeignKey('fk_bill_to_bill_category', 'bill');
        $this->dropTable('bill');
    }
}
