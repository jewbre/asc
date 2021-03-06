<?php
/**
 * Created by PhpStorm.
 * Date: 09/05/2017
 * Time: 21:31
 */

namespace common\models\helpers;


use common\models\BillCategory;
use common\models\Budget;
use common\models\Group;
use common\models\GroupInvitation;
use common\models\GroupMember;
use common\models\ShoppingCategory;
use common\models\ShoppingList;
use common\models\User;
use yii\base\Model;

class RegistrationHelper extends Model
{
    public $username;
    public $email;
    private $avatar = null;
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
        $user->avatar = $this->avatar;
        $user->selectedGroupID = $group->id;
        $user->setPassword($user->generateAuthKey());
        $user->generateAuthKey();

        if ($user->save()) {
            $groupMember = new GroupMember();
            $groupMember->setAttributes([
                'groupID' => $group->id,
                'userID' => $user->id,
            ]);
            $groupMember->save();

            $this->generateDefaultsForGroup($group->id);

            return $user;
        }

        $group->delete();

        return $user->getErrors();
    }

    public function generateDefaultsForGroup($groupID)
    {
        $budget = new Budget();
        $budget->setAttributes([
            'groupID' => $groupID,
            'amount' => 0
        ]);
        $budget->save();

        $shoppingList = new ShoppingList();
        $shoppingList->setAttributes([
            'name' => 'deafult title',
            'groupID' => $groupID
        ]);
        $shoppingList->save();

        $uncategorizedItem = new ShoppingCategory();
        $uncategorizedItem->setAttributes([
            'name' => 'Uncategorized',
            'groupID' => $groupID
        ]);
        $uncategorizedItem->save();

        $uncategorizedItem = new BillCategory();
        $uncategorizedItem->setAttributes([
            'name' => 'Uncategorized',
            'groupID' => $groupID
        ]);
        $uncategorizedItem->save();
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

        return User::findOne($args);
    }

    public function acceptInvitations(User $user)
    {
        $invitations = GroupInvitation::findAll(['email' => $user->email, 'accepted' => 1]);

        foreach ($invitations as $invitation) {
            /** @var GroupInvitation $invitation */
            $member = new GroupMember();
            $member->setAttributes([
                'groupID' => $invitation->groupID,
                'userID' => $user->id
            ]);
            $member->save();

            $invitation->delete();
        }
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

    /**
     * @param null $avatar
     */
    public function setAvatar($avatar)
    {
        $this->avatar = $avatar;
    }


}