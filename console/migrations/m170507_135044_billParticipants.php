<?php

use yii\db\Migration;

class m170507_135044_billParticipants extends Migration
{
    public function safeUp()
    {
        $this->createTable('billParticipants', [
            'id' => $this->primaryKey(),
            'billID' => $this->integer(11)->notNull(),
            'participantID' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_bill_participant_to_bill', 'billParticipants', 'billID', 'bill', 'id', 'CASCADE');
        $this->addForeignKey('fk_bill_participant_to_user', 'billParticipants', 'participantID', 'user', 'id', 'CASCADE');

    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_bill_participant_to_bill', 'billParticipants');
        $this->dropForeignKey('fk_bill_participant_to_user', 'billParticipants');
        $this->dropTable('billParticipants');
    }
}
