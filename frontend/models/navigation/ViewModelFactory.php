<?php
/**
 * Created by PhpStorm.
 * Date: 01/05/2017
 * Time: 11:37
 */

namespace frontend\models\navigation;


use common\models\Group;
use common\models\User;

class ViewModelFactory
{
    /**
     * @return ViewModel
     */
    public function generateViewModel()
    {
        /** @var User $user */
        $user = \Yii::$app->getUser()->getIdentity();

        // TODO: add features to selection
        $features = [['name' => 'Shopping list', 'link' => '#']];

        /** @var Group[] $groups */
        $groups = $user->groups;

        // TODO: selected group in groups
        /** @var Group $selectedGroup */
        $selectedGroup = $groups[0];

        $viewModelBuilder = new ViewModelBuilder();
        $viewModelBuilder
            ->setUsername($user->username)
            ->setAvatar($user->getAvatar())
            ->setEmail($user->email)
            ->setSelectedGroup($selectedGroup->id, $selectedGroup->name);

        foreach ($groups as $group) {
            $viewModelBuilder->addGroup($group->id, $group->name);
        }

        foreach ($features as $feature) {
            $viewModelBuilder->addFeature($feature['name'], $feature['link']);
        }

        return $viewModelBuilder->build();
    }

}