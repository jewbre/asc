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
use common\models\Group;
use yii\web\NotFoundHttpException;
use yii\web\UnauthorizedHttpException;

class GroupController extends BaseController
{
    public $modelClass = 'common\models\Group';

    public function actions()
    {
        $actions =  [
                'create' => [
                    'class' => 'backend\modules\api\actions\group\CreateAction',
                    'modelClass' => $this->modelClass,
                    'checkAccess' => [$this, 'checkAccess'],
                    'scenario' => $this->createScenario,
                ]
            ];

        return $actions;
    }

    protected function verbs()
    {
        return [
            'select' => ['post']
        ];
    }


    public function actionMembers()
    {
        return user()->selectedGroup->groupMembers;
    }


    public function actionSelected()
    {
        return user()->selectedGroup;
    }

    public function actionSelect()
    {
        $groupID = \Yii::$app->getRequest()->post('id', 0);

        $group = Group::findOne(['id' => $groupID]);
        $user = user();

        if(!$group) {
            throw new NotFoundHttpException("Non existing group to select.");
        }
        $isAllowedAccess = $user && array_reduce($user->groups, function($acc, Group $group) use ($groupID) {
                return $acc || $groupID == $group->id;
            }, false);
        if(!$isAllowedAccess) {
            throw new UnauthorizedHttpException("You can not select other people's groups.");
        }

        $user->selectedGroupID = $groupID;
        $user->update();

        return $group;
    }
}
