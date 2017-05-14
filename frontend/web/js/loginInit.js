(function ($) {
    $(function () {

        $('#facebook-login').on('click', function () {
            FB.login(function (response) {
                if (response.status === 'connected') {
                    console.log(response.authResponse.accessToken);
                    LoginApiService.getInstance()
                        .facebookLogin(response.authResponse.accessToken)
                        .then(function (key) {
                            window.location.href = '/site/redirect-login?key=' + key.redirectKey
                        })
                        .catch(function (error) {
                            console.log(error);
                            alert('something went wrong');
                        })

                }
            }, {scope: 'public_profile,email'});
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

function onGoogleSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
    LoginApiService.getInstance()
        .googleLogin(id_token)
        .then(function (key) {
            window.location.href = '/site/redirect-login?key=' + key.redirectKey
        })
        .catch(function (error) {
            console.log(error);
            alert('something went wrong');
        })

}