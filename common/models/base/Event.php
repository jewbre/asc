<?php
// This class was automatically generated by a giiant build task
// You should not change it manually as it will be overwritten on next build

namespace common\models\base;

use Yii;
use yii\behaviors\TimestampBehavior;

/**
 * This is the base-model class for table "event".
 *
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property integer $groupID
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $isRepeatable
 *
 * @property \common\models\Group $group
 * @property \common\models\EventParticipant[] $eventParticipants
 * @property \common\models\RepeatableEvent[] $repeatableEvents
 * @property string $aliasModel
 */
abstract class Event extends \yii\db\ActiveRecord
{



    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'event';
    }


    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [];
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'groupID'], 'required'],
            [['description'], 'string'],
            [['groupID'], 'integer'],
            [['isRepeatable'], 'safe'],
            [['created_at'], 'safe'],
            [['name'], 'string', 'max' => 255],
            [['groupID'], 'exist', 'skipOnError' => true, 'targetClass' => \common\models\Group::className(), 'targetAttribute' => ['groupID' => 'id']]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'description' => 'Description',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'groupID' => 'Group ID',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGroup()
    {
        return $this->hasOne(\common\models\Group::className(), ['id' => 'groupID']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEventParticipants()
    {
        return $this->hasMany(\common\models\EventParticipant::className(), ['eventID' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getRepeatableEvents()
    {
        return $this->hasMany(\common\models\RepeatableEvent::className(), ['eventID' => 'id']);
    }




}
