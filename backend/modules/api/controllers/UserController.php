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
use common\models\helpers\RegistrationHelper;
use common\models\LoginRedirect;
use common\models\User;
use Facebook\Exceptions\FacebookResponseException;
use Facebook\Exceptions\FacebookSDKException;
use Facebook\Facebook;
use Google_Client;
use Yii;
use yii\filters\Cors;
use yii\helpers\Json;
use yii\web\BadRequestHttpException;

class UserController extends BaseController
{
    public $modelClass = 'common\models\User';

    public function actions()
    {
        // Disable all actions, enable only custom.
        return [];
    }


    public function behaviors()
    {
        $behaviors = parent::behaviors();

        $auth = $behaviors['authenticator'];
        unset($behaviors['authenticator']);

        $behaviors['corsFilter'] = [
            'class' => Cors::className(),
            'cors' => [
                'Origin' => ['*'],
                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Allow-Credentials' => true,
            ],
        ];

        $behaviors['authenticator'] = $auth;
        $behaviors['authenticator']['except'] = ['facebook-login', 'login-facebook', 'google-login', 'login-google'];

        return $behaviors;
    }


    public function actionSearch($query)
    {
        $users = User::find()
            ->where('email like :query', ['query' => '%' . $query . '%'])
            ->limit(10)
            ->orderBy(['length(email)' => SORT_ASC])
            ->all();

        return $users;
    }

    public function actionMe()
    {
        $me = \user();
        return [
            'id' => $me->id,
            'username' => $me->username,
            'avatar' => $me->getAvatar(),
        ];
    }

    public function actionFacebookLogin()
    {
        $user = $this->doFacebookLogin();

        if ($user instanceof User) {
            return $user;
        }

        throw new BadRequestHttpException($user);
    }

    private function doFacebookLogin()
    {
        User::$withAccessToken = true;
        $accessToken = \Yii::$app->getRequest()->post('accessToken', '');

        if (!$accessToken) {
            throw new BadRequestHttpException("Invalid access token.");
        }

        $fb = new Facebook([
            'app_id' => param('facebookAppID'),
            'app_secret' => param('facebookSecret'),
            'default_graph_version' => 'v2.9',
            'default_access_token' => $accessToken,
        ]);


        try {
            // Get the \Facebook\GraphNodes\GraphUser object for the current user.
            // If you provided a 'default_access_token', the '{access-token}' is optional.
            $response = $fb->get('/me?fields=id,name,email');
        } catch (FacebookResponseException $e) {
            // When Graph returns an error
            throw new BadRequestHttpException($e->getMessage());
        } catch (FacebookSDKException $e) {
            // When validation fails or other local issues
            throw new BadRequestHttpException($e->getMessage());
        }

        $me = $response->getGraphUser();

        $username = $me->getName();
        $email = $me->getEmail();
        $id = $me->getId();
        $avatar = 'http://graph.facebook.com/' . $id . '/picture?width=96&height=96';

        $registrationHelper = new RegistrationHelper();
        $registrationHelper->setFbID($id);
        $registrationHelper->setAvatar($avatar);

        $user = $registrationHelper->userExists($email, $id);

        if ($user) {
            $user->fbUserID = $id;
            $user->update();
            $user->updateAvatar($avatar);
            $registrationHelper->acceptInvitations($user);
            return $user;
        }

        $user = $registrationHelper->registerUser($username, $email);
        $registrationHelper->acceptInvitations($user);
        return $user;
    }

    public function actionLoginFacebook()
    {
        $user = $this->doFacebookLogin();

        if ($user instanceof User) {
            $loginRedirect = new LoginRedirect();
            $loginRedirect->setAttributes([
                'loginHash' => Yii::$app->security->generateRandomString(),
                'userID' => $user->id
            ]);
            $loginRedirect->save();
            return $loginRedirect;
        }

        throw new BadRequestHttpException($user);
    }

    public function actionGoogleLogin()
    {
        $user = $this->doGoogleLogin(param('androidGoogleClientID'));

        if ($user instanceof User) {
            return $user;
        }

        throw new BadRequestHttpException($user);
    }

    private function doGoogleLogin($token)
    {
        User::$withAccessToken = true;
        $accessToken = \Yii::$app->getRequest()->post('accessToken', '');

        if (!$accessToken) {
            throw new BadRequestHttpException("Invalid access token.");
        }
        $client = new Google_Client(['client_id' => $token]);

        try {
            $payload = $client->verifyIdToken($accessToken);
        } catch (\Exception $e) {
            $payload = Json::decode(
                file_get_contents('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' . $token)
            );
        }
        if ($payload) {
            // If request specified a G Suite domain:
            //$domain = $payload['hd'];
        } else {
            throw new BadRequestHttpException("Invalid token.");
        }

        $username = $payload['name'];
        $email = $payload['email'];
        $id = $payload['sub'];

        $registrationHelper = new RegistrationHelper();
        $registrationHelper->setGoogleID($id);
        $registrationHelper->setAvatar($payload['picture']);

        $user = $registrationHelper->userExists($email, null, $id);

        if ($user) {
            $user->googleUserID = $id;
            $user->update();
            $user->updateAvatar($payload['picture']);
            $registrationHelper->acceptInvitations($user);
            return $user;
        }

        $user = $registrationHelper->registerUser($username, $email);
        if ($user instanceof User) {
            $registrationHelper->acceptInvitations($user);
        }
        return $user;
    }

    public function actionLoginGoogle()
    {
        $user = $this->doGoogleLogin(param('googleClientID'));

        if ($user instanceof User) {
            $loginRedirect = new LoginRedirect();
            $loginRedirect->setAttributes([
                'loginHash' => Yii::$app->security->generateRandomString(),
                'userID' => $user->id
            ]);
            $loginRedirect->save();
            return $loginRedirect;
        }

        return $user;
    }

    public function actionUpdate()
    {
        $username = Yii::$app->getRequest()->bodyParams['username'];

        $user = user();
        if ($username) {
            $user->setAttribute('username', $username);
            $user->update();
        }

        return $user;
    }

    protected function verbs()
    {
        return [
            'search' => ['GET'],
            'me' => ['GET'],
            'facebook-login' => ['POST'],
            'google-login' => ['POST'],
            'login-facebook' => ['POST'],
            'login-google' => ['POST'],
            'update' => ['PUT'],
        ];
    }
}
