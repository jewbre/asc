<?php
/**
 * Created by PhpStorm.
 * Date: 03/05/2017
 * Time: 23:06
 */

namespace backend\modules\api\actions\bill;

use common\models\Bill;
use common\models\BillCategory;
use common\models\BillParticipants;
use yii\rest\CreateAction as BaseCreateAction;

class CreateAction extends BaseCreateAction
{
    public function run()
    {
        $groupID = user()->selectedGroupID;
        $category = \Yii::$app->getRequest()->post('category', null);
        if (!is_numeric($category)) {
            $name = trim($category);

            $billCategory = BillCategory::findOne([
                'name' => $name,
                'groupID' => $groupID
            ]);

            if (!$billCategory) {
                $billCategory = new BillCategory();
                $billCategory->setAttributes([
                    'name' => $name,
                    'groupID' => $groupID
                ]);
                $billCategory->save();
            }
        } else {
            $billCategory = BillCategory::findOne([
                'id' => $category
            ]);
        }

        $request = \Yii::$app->getRequest();
        $bodyParams = $request->bodyParams;

        $participants = $bodyParams['participants'];

        unset($bodyParams['category']);
        $bodyParams['payerID'] = user()->id;
        $bodyParams['billCategoryID'] = $billCategory->id;
        $bodyParams['groupID'] = $groupID;
        $request->bodyParams = $bodyParams;

        /** @var Bill $model */
        $model = parent::run();

        foreach ($participants as $participant) {
            $p = new BillParticipants();
            $p->setAttributes([
                'billID' => $model->id,
                'participantID' => $participant
            ]);
            $p->save();
        }

        return $model;
    }


}