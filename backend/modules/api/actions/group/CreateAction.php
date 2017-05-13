<?php
/**
 * Created by PhpStorm.
 * Date: 12/05/2017
 * Time: 18:10
 */

namespace backend\modules\api\actions\group;

use common\models\Budget;
use common\models\Group;
use common\models\GroupInvitation;
use common\models\GroupMember;
use yii\rest\CreateAction as BaseCreateAction;

class CreateAction extends BaseCreateAction
{
    public function run()
    {
        $members = \Yii::$app->getRequest()->post('members', []);
        if(!$members) {
            $members = [];
        }

        $user = user();
        $request = \Yii::$app->getRequest();
        $bodyParams = $request->bodyParams;

        $bodyParams['isPersonal'] = 0;
        $request->bodyParams = $bodyParams;
        
        /** @var Group $group */
        $group = parent::run();

        if(!$group->hasErrors()) {
            $budget = new Budget();
            $budget->setAttributes([
                'groupID' => $group->id,
                'amount' => 0
            ]);
            $budget->save();

            // Add creator to the group
            $groupMember = new GroupMember();
            $groupMember->setAttributes([
                'groupID' => $group->id,
                'userID' => $user->id
            ]);
            $groupMember->save();

            $user->selectedGroupID = $group->id;
            $user->update();

            foreach ($members as $member) {
                $groupInvite = new GroupInvitation();
                $groupInvite->setAttributes([
                    'groupID' => $group->id,
                    'email' => $member
                ]);
                $groupInvite->save();

                // TODO: send email etc
            }

        }

        return $group;
    }


}