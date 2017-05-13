<?php

use yii\db\Migration;

class m170513_124558_repeatableEvent extends Migration
{
    public function safeUp()
    {
        $this->createTable('repeatableEvent', [
            'id' => $this->primaryKey(),
            'type' => $this->string(255)->notNull(),
            'eventID' => $this->integer(11)->notNull(),
            'originalEventID' => $this->integer(11)->notNull()
        ]);

        $this->addForeignKey('fk_repeatable_event_to_event', 'repeatableEvent', 'eventID', 'event', 'id', 'CASCADE');
        $this->addForeignKey('fk_repeatable_event_to_original_event', 'repeatableEvent', 'originalEventID', 'event', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_repeatable_event_to_original_event', 'repeatableEvent');
        $this->dropForeignKey('fk_repeatable_event_to_event', 'repeatableEvent');
        $this->dropTable('repeatableEvent');
    }
}
