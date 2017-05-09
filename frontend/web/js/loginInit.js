(function ($) {
    $(function () {

        $('#facebook-login').on('click', function () {
            FB.login(function (response) {
                if (response.status === 'connected') {
                    LoginApiService.getInstance()
                        .facebookLogin(response.authResponse.accessToken)
                        .then(function (key) {
                            window.location.href = '/asc/frontend/web/site/redirect-login?key=' + key.redirectKey
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