<?php
namespace common\models\subscriptions;


use common\helpers\PushNotificationHelper;
use common\models\Subscription;

class WebSubscription extends Subscription
{
    public function notify($payload)
    {
        try{
            (new PushNotificationHelper())->sendToSubscriptions($payload, $this);
        } catch (\Exception $e) {
            // There is something wrong with this subscription, just delete it
            $this->delete();
        }
    }
}