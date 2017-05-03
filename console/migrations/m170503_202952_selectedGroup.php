<?php

use yii\db\Migration;

class m170503_202952_selectedGroup extends Migration
{
    public function safeUp()
    {
        $this->addColumn('user', 'selectedGroupID', $this->integer(11)->notNull()->defaultValue(1));
        $this->addForeignKey('fk_user_to_group', 'user', 'selectedGroupID', 'group', 'id');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_user_to_group', 'user');
        $this->dropColumn('user', 'selectedGroupID');
    }
}
