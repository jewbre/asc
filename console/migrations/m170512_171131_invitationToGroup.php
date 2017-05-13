<?php

use yii\db\Migration;

class m170512_171131_invitationToGroup extends Migration
{
    public function safeUp()
    {
        $this->createTable('groupInvitation', [
            'id' => $this->primaryKey(),
            'email' => $this->string(255)->notNull(),
            'groupID' => $this->integer(11)->notNull(),
            'accepted' => $this->smallInteger(1)->defaultValue(0),
            'created_at' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_group_invitation_to_group', 'groupInvitation', 'groupID', 'group', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_group_invitation_to_group', 'groupInvitation');
        $this->dropTable('groupInvitation');
    }
}
