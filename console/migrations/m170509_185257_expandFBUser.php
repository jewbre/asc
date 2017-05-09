<?php

use yii\db\Migration;

class m170509_185257_expandFBUser extends Migration
{
    public function safeUp()
    {
        $this->addColumn('user', 'fbUserID', $this->string(255));
        $this->addColumn('user', 'googleUserID', $this->string(255));
    }

    public function safeDown()
    {
        $this->dropColumn('user', 'fbUserID');
        $this->dropColumn('user', 'googleUserID');
    }
}
