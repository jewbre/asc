<?php

use yii\db\Migration;

class m170513_110958_addAvatarToModel extends Migration
{
    public function safeUp()
    {
        $this->addColumn('user', 'avatar', $this->string(1023)->null());
    }

    public function safeDown()
    {
        $this->dropTable('user', 'avatar');
    }
}
