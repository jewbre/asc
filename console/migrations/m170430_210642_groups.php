<?php

use yii\db\Migration;

class m170430_210642_groups extends Migration
{
    public function safeUp()
    {
        $this->createTable('group', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull()->defaultValue('PersonalGroup'),
            'isPersonal' => $this->smallInteger(1)->defaultValue(1),
            'created_at' => $this->integer(11)->notNull(),
            'updated_at' => $this->integer(11)->notNull(),
        ]);
    }

    public function safeDown()
    {
        $this->dropTable('group');
    }
}
