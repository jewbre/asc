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
use common\models\helpers\RegistrationHelper;
use Postmark\PostmarkClient;
use yii\rest\CreateAction as BaseCreateAction;

class CreateAction extends BaseCreateAction
{
    public function run()
    {
        $members = \Yii::$app->getRequest()->post('members', []);
        if (!$members) {
            $members = [];
        }

        if (is_string($members) && $members[0] == '[') {
            $members = explode(',',
                substr($members, 1, strlen($members) - 2)
            );
        }

        $user = user();
        $request = \Yii::$app->getRequest();
        $bodyParams = $request->bodyParams;

        $bodyParams['isPersonal'] = 0;
        $request->bodyParams = $bodyParams;

        /** @var Group $group */
        $group = parent::run();

        if (!$group->hasErrors()) {
            // Add creator to the group
            $groupMember = new GroupMember();
            $groupMember->setAttributes([
                'groupID' => $group->id,
                'userID' => $user->id
            ]);
            $groupMember->save();

            $registerHelper = new RegistrationHelper();
            $registerHelper->generateDefaultsForGroup($group->id);

            $user->selectedGroupID = $group->id;
            $user->update();

            $client = new PostmarkClient(param('postmarkToken'));
            foreach ($members as $member) {
                if($member == user()->email) {
                    continue;
                }
                if (filter_var($member, FILTER_VALIDATE_EMAIL)) {
                    continue;
                };

                $member = trim($member);
                $groupInvite = new GroupInvitation();
                $groupInvite->setAttributes([
                    'groupID' => $group->id,
                    'email' => $member
                ]);
                $groupInvite->save();

                // Create Client
                $inviteData = [
                    'group' => $group->id,
                    'email' => $member
                ];

                $sendResult = $client->sendEmailWithTemplate(
                    "vilim.stubican@degordian.com",
                    $member,
                    param('welcomeMailID'),
                    [
                        "invite_sender_name" => $user->email,
                        "invite_sender_organization_name" => $group->name,
                        "action_url" => param('loginUrl') . '?' . http_build_query($inviteData),
                        "name" => "name_Value",
                        "support_email" => "support_email_Value",
                        "live_chat_url" => "live_chat_url_Value",
                        "help_url" => "help_url_Value"
                    ]
                );
            }

        }

        return $group;
    }


}