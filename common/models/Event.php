<?php

namespace common\models;

use common\models\base\Event as BaseEvent;
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

    public function fields()
    {
        $fields = [
            'id',
            'name',
            'description',
            'repeatable' => function (Event $model) {
                return $this->isRepeatable() ?
                    !empty($model->repeatableEvents) ?
                        $model->repeatableEvents[0]->type
                        : 'none'
                : 'none';
            },
            'participants' => function (Event $event) {
                return $event->eventParticipants;
            }
        ];
        if ($this->created_at) {
            $fields['datetime'] = function (Event $event) {

                $d = new \DateTime();
                $d->setTimestamp($event->created_at);
                return $d->format('c');
            };
        }

        return $fields;
    }

    public function isRepeatable()
    {
        return (bool)$this->isRepeatable;
    }


}
