<?php

use yii\db\Migration;

class m170430_210655_groupMembers extends Migration
{
    public function safeUp()
    {
        $this->createTable('groupMember', [
            'id' => $this->primaryKey(),
            'groupID' => $this->integer(11)->notNull(),
            'userID' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_group_member_to_group', 'groupMember', 'groupID', 'group', 'id', 'CASCADE');
        $this->addForeignKey('fk_group_member_to_user', 'groupMember', 'userID', 'user', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_group_member_to_user', 'groupMember');
        $this->dropForeignKey('fk_group_member_to_group', 'groupMember');
        $this->dropTable('group');
    }
}
