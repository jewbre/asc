<?php
/**
 * Created by PhpStorm.
 * Date: 03/06/2017
 * Time: 13:17
 */

namespace frontend\models;

use Yii;

class MyApplication extends \yii\web\Application
{
    public function handleRequest($request)
    {
        //check if connection is secure
        if (!$request->isSecureConnection) {
            //otherwise redirect to same url with https
            $secureUrl= str_replace('http', 'https', $request->absoluteUrl);
            //use 301 for a permanent redirect
            return Yii::$app->getResponse()->redirect($secureUrl, 302);
        } else {
            //if secure connection call parent implementation
            return parent::handleRequest($request);
        }
    }
}