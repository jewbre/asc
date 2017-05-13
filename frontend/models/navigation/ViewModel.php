<?php
/**
 * Created by PhpStorm.
 * Date: 01/05/2017
 * Time: 11:29
 */

namespace frontend\models\navigation;


class ViewModel
{
    private $username = '';
    private $avatar = '';
    private $selectedGroup = [];
    private $groups = [];
    private $features = [];
    private $email = '';
    private $users = [];

    /**
     * @param $groupID
     * @param $groupName
     */
    public function addGroup($groupID, $groupName)
    {
        $this->groups[] = ['id' => $groupID, 'name' => $groupName];
    }

    /**
     * @param $featureName
     * @param $featureLink
     * @internal param array $features
     */
    public function addFeature($featureName, $featureLink)
    {
        $this->features[] = ['name' => $featureName, 'link' => $featureLink];
    }

    /**
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param string $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * @return string
     */
    public function getAvatar()
    {
        return $this->avatar;
    }

    /**
     * @param string $avatar
     */
    public function setAvatar($avatar)
    {
        $this->avatar = $avatar;
    }

    /**
     * @return array
     */
    public function getSelectedGroup()
    {
        return $this->selectedGroup;
    }

    /**
     * @param $groupID
     * @param $groupName
     * @internal param array $selectedGroup
     */
    public function setSelectedGroup($groupID, $groupName)
    {
        $this->selectedGroup = ['id' => $groupID, 'name' => $groupName];
    }

    /**
     * @return array
     */
    public function getGroups()
    {
        return $this->groups;
    }

    /**
     * @return array
     */
    public function getFeatures()
    {
        return $this->features;
    }

    /**
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return array
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * @param array $users
     */
    public function setUsers($users)
    {
        $this->users = $users;
    }

}