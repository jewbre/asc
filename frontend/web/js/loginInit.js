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

        setTimeout(function () {
            $('.google-btn').append('<div class="googleText">Google</div>')
        }, 1000);
    }); // end of document ready
})(jQuery); // end of jQuery name space

function onGoogleSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
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