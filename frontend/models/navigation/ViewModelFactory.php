<?php
/**
 * Created by PhpStorm.
 * Date: 01/05/2017
 * Time: 11:37
 */

namespace frontend\models\navigation;


use common\models\Group;
use common\models\User;
use yii\helpers\Url;

class ViewModelFactory
{
    /**
     * @return ViewModel
     */
    public function generateViewModel()
    {
        /** @var User $user */
        $user = user();

        $features = [
            [
                'name' => 'Shopping list',
                'link' => Url::to(['/shopping/lists'])
            ],
            [
                'name' => 'Bills',
                'link' => Url::to(['/bills'])
            ],
        ];

        /** @var Group[] $groups */
        $groups = $user->groups;

        /** @var Group $selectedGroup */
        $selectedGroup = $user->selectedGroup;

        $users = User::find()->all();

        $viewModelBuilder = new ViewModelBuilder();
        $viewModelBuilder
            ->setUsername($user->username)
            ->setAvatar($user->getAvatar())
            ->setEmail($user->email)
            ->setUsers($users)
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