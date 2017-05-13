<?php
/**
 * Created by PhpStorm.
 * Date: 01/05/2017
 * Time: 11:30
 */

namespace frontend\models\navigation;


class ViewModelBuilder
{
    private $model = null;

    /**
     * ViewModelBuilder constructor.
     */
    public function __construct()
    {
        $this->model = new ViewModel();
    }

    /**
     * @param string $username
     * @return $this
     */
    public function setUsername($username)
    {
        $this->model->setUsername($username);
        return $this;
    }

    /**
     * @param string $email
     * @return $this
     */
    public function setEmail($email)
    {
        $this->model->setEmail($email);
        return $this;
    }

    /**
     * @param string $avatar
     * @return $this
     */
    public function setAvatar($avatar)
    {
        $this->model->setAvatar($avatar);
        return $this;
    }

    /**
     * @param $groupID
     * @param $groupName
     * @internal param array $selectedGroup
     * @return $this
     */
    public function setSelectedGroup($groupID, $groupName)
    {
        $this->model->setSelectedGroup($groupID, $groupName);
        return $this;
    }

    /**
     * @param $groupID
     * @param $groupName
     * @return $this
     */
    public function addGroup($groupID, $groupName)
    {
        $this->model->addGroup($groupID, $groupName);
        return $this;
    }

    /**
     * @param $featureName
     * @param $featureLink
     * @internal param array $features
     * @return $this
     */
    public function addFeature($featureName, $featureLink)
    {
        $this->model->addFeature($featureName, $featureLink);
        return $this;
    }

    /**
     * @param $users
     * @return $this
     */
    public function setUsers($users)
    {
        $this->model->setUsers($users);
        return $this;
    }

    /**
     * @return ViewModel
     */
    public function build()
    {
        $builtModel = $this->model;
        $this->model = new ViewModel();
        return $builtModel;
    }
}