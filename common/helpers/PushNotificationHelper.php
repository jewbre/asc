<?php

namespace common\helpers;

use common\models\Subscription;
use common\models\subscriptions\WebSubscription;
use Minishlink\WebPush\WebPush;
use yii\helpers\Json;

/**
 * Created by PhpStorm.
 * Date: 24/05/2017
 * Time: 18:53
 */
class PushNotificationHelper
{
    /**
     * @param string $payload
     * @param WebSubscription $subscription
     */
    public function sendToSubscriptions($payload, WebSubscription $subscription)
    {
        $auth = array(
            'GCM' => 'MY_GCM_API_KEY', // deprecated and optional, it's here only for compatibility reasons
            'VAPID' => array(
                'subject' => 'mailto:me@roomero.co',
                // can be a mailto: or your website address
                'publicKey' => param('pwa-public-key'),
                // (recommended) uncompressed public key P-256 encoded in Base64-URL
                'privateKey' => param('pwa-private-key'),
                // (recommended) in fact the secret multiplier of the private key encoded in Base64-URL
            ),
        );

        $data = Json::decode($subscription->data);

        $webPush = new WebPush($auth);
        /** @var Subscription $subscription */
        $webPush->sendNotification(
            $data['endpoint'],
            Json::encode($payload),
            $data['keys']['p256dh'],
            $data['keys']['auth']
        );

        $webPush->flush();
    }
}