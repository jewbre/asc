<?php
/**
 * Created by PhpStorm.
 * Date: 09/05/2017
 * Time: 21:31
 */

namespace common\models\helpers;


use common\models\Budget;
use common\models\Group;
use common\models\GroupMember;
use common\models\User;
use yii\base\Model;

class RegistrationHelper extends Model
{
    public $username;
    public $email;
    private $fbID = null;
    private $googleID = null;

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['email', 'trim'],
            ['email', 'required'],
            ['email', 'email'],
            ['email', 'string', 'max' => 255],
            [
                'email',
                'unique',
                'targetClass' => '\common\models\User',
                'message' => 'This email address has already been taken.'
            ],

            [['fbID', 'googleID', 'username'], 'safe']
        ];
    }

    /**
     * @param $username
     * @param $email
     * @return User|array
     */
    public function registerUser($username, $email)
    {
        $this->username = $username;
        $this->email = $email;
        if (!$this->validate()) {
            return $this->getErrors();
        }

        $group = new Group();
        $group->setAttributes([
            'name' => 'PersonalGroup',
            'isPersonal' => true
        ]);
        $group->save();

        $user = new User();
        $user->username = $this->username;
        $user->email = $this->email;
        $user->fbUserID = $this->fbID;
        $user->googleUserID = $this->googleID;
        $user->selectedGroupID = $group->id;
        $user->setPassword($user->generateAuthKey());
        $user->generateAuthKey();

        if($user->save()) {
            $groupMember = new GroupMember();
            $groupMember->setAttributes([
                'groupID' => $group->id,
                'userID' => $user->id,
            ]);
            $groupMember->save();

            $budget = new Budget();
            $budget->setAttributes([
                'groupID' => $group->id,
                'amount' => 0
            ]);
            $budget->save();

            return $user;
        }

        $group->delete();

        return $user->getErrors();
    }

    /**
     * @param $email
     * @param null $fbID
     * @param null $googleID
     * @return User|bool
     */
    public function userExists($email, $fbID = null, $googleID = null)
    {
        $args = [
            'email' => $email
        ];

        if($fbID != null) {
            $args['fbUserID'] = $fbID;
        }

        if($googleID != null) {
            $args['googleUserID'] = $googleID;
        }

        return User::findOne($args);
    }

    /**
     * @param null $fbID
     */
    public function setFbID($fbID)
    {
        $this->fbID = $fbID;
    }

    /**
     * @param null $googleID
     */
    public function setGoogleID($googleID)
    {
        $this->googleID = $googleID;
    }
}