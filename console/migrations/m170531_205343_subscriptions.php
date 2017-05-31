<?php

use yii\db\Migration;

class m170531_205343_subscriptions extends Migration
{
    public function safeUp()
    {
        $this->createTable('subscription', [
            'id' => $this->primaryKey(),
            'type' => $this->string(255)->notNull(),
            'data' => $this->text(),
            'userID' => $this->integer(11)->notNull()
        ]);

        $this->addForeignKey('fk_subscription_to_user', 'subscription', 'userID', 'user', 'id', 'CASCADE');
    }

    public function safeDown()
    {
        $this->dropForeignKey('fk_subscription_to_user', 'subscription');
        $this->dropTable('subscription');
    }
}
