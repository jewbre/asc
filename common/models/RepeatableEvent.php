<?php

namespace common\models;

use Yii;
use \common\models\base\RepeatableEvent as BaseRepeatableEvent;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "repeatableEvent".
 */
class RepeatableEvent extends BaseRepeatableEvent
{

    const DAILY = 'daily';
    const WEEKLY = 'weekly';
    const MONTHLY = 'monthly';
    const NONE = 'none';

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

    public static function generateForPeriod($from, $to)
    {
        $repeatableEvents = RepeatableEvent::find()->all();

        foreach ($repeatableEvents as $repeatableEvent) {
            /** @var RepeatableEvent $repeatableEvent */
            /** @var Event $event */
            $event = $repeatableEvent->originalEvent;

            $date = new \DateTime($event->created_at);

            switch ($repeatableEvent->type) {
                case RepeatableEvent::DAILY :
                    $period = 'P1D';
                    break;
                case RepeatableEvent::WEEKLY :
                    $period = 'P1M';
                    break;
                case RepeatableEvent::MONTHLY :
                default:
                    $period = 'P7D';
                    break;
            }

            while($date->getTimestamp() < $from) {
                $date->add(new \DateInterval($period));
            }

            while($date->getTimestamp() < $to) {
                $timestamp = $date->getTimestamp();
                $date->add(new \DateInterval($period));

                if(Event::findOne(['created_at' => $timestamp])) {
                    continue;
                }

                $newRepEvent = new Event();
                $newRepEvent->setAttributes($event->getAttributes());
                $newRepEvent->setAttribute('created_at', $timestamp);
                $newRepEvent->save();
            }
        }
    }
}
