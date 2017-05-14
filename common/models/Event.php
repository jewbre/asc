<?php

namespace common\models;

use Yii;
use \common\models\base\Event as BaseEvent;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "event".
 */
class Event extends BaseEvent
{

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

    public function isRepeatable()
    {
        return (bool) $this->isRepeatable;
    }

    public function fields()
    {
        return [
            'id',
            'name',
            'description',
            'datetime' => function(Event $event) {
                $d = new \DateTime();
                $d->setTimestamp($event->created_at);
                return $d->format('c');
            },
            'repeatable' => function(Event $mode) {
                return $this->isRepeatable();
            },
            'participants' => function(Event $event) {
                return $event->eventParticipants;
            }
        ];
    }


}
