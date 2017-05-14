<?php
/**
 * /Users/vilimstubican/work/asc/backend/runtime/giiant/f197ab8e55d1e29a2dea883e84983544
 *
 * @package default
 */


namespace backend\modules\api\controllers;

/**
 * This is the class for REST controller "GroupController".
 */
use backend\modules\api\controllers\base\BaseController;
use common\models\GroupInvitation;
use Postmark\PostmarkClient;

class GroupMemberController extends BaseController
{
    public $modelClass = 'common\models\GroupMember';

    public function actions()
    {
        $actions = [];

        return $actions;
    }

    public function actionAdd()
    {
        $members = \Yii::$app->getRequest()->post('members', []);

        if (is_string($members) && $members[0] == '[') {
            $members = explode(',',
                substr($members, 1, strlen($members) - 2)
            );
        }

        $user = user();
        $group = user()->selectedGroup;
        $client = new PostmarkClient(param('postmarkToken'));
        foreach ($members as $member) {
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

    protected function verbs()
    {
        return [
            'add' => ['post']
        ];
    }
}
