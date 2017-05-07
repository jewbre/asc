<?php

use yii\db\Migration;

class m170507_211903_budget extends Migration
{
    public function safeUp()
    {
        $this->createTable('budget', [
            'id' => $this->primaryKey(),
            'groupID' => $this->integer(11)->notNull(),
            'amount' => $this->decimal(16, 2)->defaultValue(0),
        ]);

        $this->addForeignKey('fk_budget_to_group', 'budget', 'groupID', 'group', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_budget_to_group', 'budget');
        $this->dropTable('budget');
    }
}
