<?php

use yii\db\Migration;

class m170509_154505_dept extends Migration
{
    public function safeUp()
    {
        $this->createTable('debt', [
            'id' => $this->primaryKey(),
            'firstPersonID' => $this->integer(11)->notNull(),
            'secondPersonID' => $this->integer(11)->notNull(),
            'groupID' => $this->integer(11)->notNull(),
            'amount' => $this->decimal(16,2)
        ]);

        $this->addForeignKey('fk_first_person_to_user', 'debt', 'firstPersonID', 'user', 'id', 'CASCADE');
        $this->addForeignKey('fk_second_person_to_user', 'debt', 'secondPersonID', 'user', 'id', 'CASCADE');
        $this->addForeignKey('fk_debt_group_to_group', 'debt', 'groupID', 'group', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_debt_group_to_group', 'debt');
        $this->dropForeignKey('fk_second_person_to_user', 'debt');
        $this->dropForeignKey('fk_first_person_to_user', 'debt');
        $this->dropTable('debt');
    }
}
