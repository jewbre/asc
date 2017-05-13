<?php

use yii\db\Migration;

class m170513_123643_event extends Migration
{
    public function safeUp()
    {
        $this->createTable('event', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'created_at' => $this->integer(11)->notNull(),
            'updated_at' => $this->integer(11)->notNull(),
            'groupID' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_event_to_groupID', 'event', 'groupID', 'group', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_event_to_groupID', 'event');
        $this->dropTable('event');
    }
}
