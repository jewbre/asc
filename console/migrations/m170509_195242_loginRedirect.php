<?php

use yii\db\Migration;

class m170509_195242_loginRedirect extends Migration
{
    public function safeUp()
    {
        $this->createTable('loginRedirect', [
            'id' => $this->primaryKey(),
            'loginHash' => $this->string(255)->notNull(),
            'userID' => $this->integer(11)->notNull(),
            'created_at' => $this->integer(11)->notNull(),
        ]);

        $this->addForeignKey('fk_login_redirect_to_user', 'loginRedirect', 'userID', 'user', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_login_redirect_to_user', 'loginRedirect');
        $this->dropTable('loginRedirect');
    }
}
