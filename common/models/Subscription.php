<?php

namespace common\models;

use common\models\base\Subscription as BaseSubscription;
use common\models\subscriptions\WebSubscription;
use yii\db\Query;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "subscription".
 */
class Subscription extends BaseSubscription
{
    const WEB = 'web';
    const ANDROID = 'android';
    const IOS = 'ios';

    const ITEM_CHECKED = 'item-select';
    const ITEM_UNCHECKED = 'item-unselect';
    const ITEM_BOUGHT = 'item-buy';
    const ITEM_SOLD = 'item-unbuy';

    public static function instantiate($row)
    {
        switch($row['type']) {
            case self::WEB:
                return new WebSubscription($row);
        }
        return parent::instantiate($row);
    }


    public function behaviors()
    {
        return ArrayHelper::merge(
            parent::behaviors(),
            [
                # custom behaviors
            ]
        );
    }

    public function rules()
    {
        return ArrayHelper::merge(
            parent::rules(),
            [
                # custom validation rules
            ]
        );
    }

    /**
     * @param $payload
     */
    public function notify($payload)
    {
        // do absolutely nothing
    }

    public static function notifyGroup($payload, $groupID)
    {
        $currentUserID = user()->id;

        $userQuery = (new Query())
            ->select('id')
            ->from(User::tableName())
            ->where(['selectedGroupID' => $groupID]);

        $subscriptions = Subscription::find()
            ->where(['userID' => $userQuery])
            ->all();

        foreach ($subscriptions as $subscription) {
            /** @var Subscription $subscription */
            if($subscription->userID == $currentUserID) {
                continue;
            }

            $subscription->notify($payload);
        }
    }
}
