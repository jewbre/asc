<?php
/**
 * Created by PhpStorm.
 * Date: 03/05/2017
 * Time: 22:25
 */

namespace backend\modules\api\models\helpers;


class ErrorResponseBuilder
{

    /**
     * @param $errorCode
     * @param $errorObject
     * @return \yii\web\Response
     */
    public static function buildResponse($errorCode, $errorObject)
    {
        $response = \Yii::$app->getResponse();
        $response->setStatusCode($errorCode);
        $response->data = $errorObject;

        return $response;
    }

}