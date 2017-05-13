<?php

use yii\db\Migration;

class m170513_124610_eventParticipants extends Migration
{
    public function safeUp()
    {
        $this->createTable('eventParticipant', [
            'id' => $this->primaryKey(),
            'eventID' => $this->integer(11)->notNull(),
            'userID' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_event_participant_to_event', 'eventParticipant', 'eventID', 'event', 'id', 'CASCADE');
        $this->addForeignKey('fk_event_participant_to_user', 'eventParticipant', 'userID', 'user', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_event_participant_to_user', 'eventParticipant');
        $this->dropForeignKey('fk_event_participant_to_event', 'eventParticipant');
        $this->dropTable('eventParticipant');
    }
}
