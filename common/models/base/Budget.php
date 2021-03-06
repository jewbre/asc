<?php
// This class was automatically generated by a giiant build task
// You should not change it manually as it will be overwritten on next build

namespace common\models\base;

use Yii;

/**
 * This is the base-model class for table "budget".
 *
 * @property integer $id
 * @property integer $groupID
 * @property string $amount
 *
 * @property \common\models\Group $group
 * @property string $aliasModel
 */
abstract class Budget extends \yii\db\ActiveRecord
{



    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'budget';
    }


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['groupID'], 'required'],
            [['groupID'], 'integer'],
            [['amount'], 'number'],
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
            'groupID' => 'Group ID',
            'amount' => 'Amount',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGroup()
    {
        return $this->hasOne(\common\models\Group::className(), ['id' => 'groupID']);
    }




}
