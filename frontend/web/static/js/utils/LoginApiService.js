var LoginApiService = (function () {
    function LoginApiService() {
        this.basePath = '';
        this.basePath = JSON.parse(document.getElementById('api-base-path').innerText);
    }
    LoginApiService.getInstance = function () {
        if (LoginApiService.instance == null) {
            LoginApiService.instance = new LoginApiService();
        }
        return LoginApiService.instance;
    };
    LoginApiService.prototype.facebookLogin = function (accessToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(LoginApiService.FB_LOGIN, {
                accessToken: accessToken
            })
                .then(function (key) {
                resolve(key);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    LoginApiService.prototype.googleLogin = function (accessToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(LoginApiService.GOOGLE_LOGIN, {
                accessToken: accessToken
            })
                .then(function (key) {
                resolve(key);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    LoginApiService.prototype.get = function (path) {
        var fullPath = this.basePath + path;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: fullPath,
                method: 'GET',
            }).done(function (data) {
                resolve(data);
            }).fail(function (error) {
                reject(error);
            });
        });
    };
    LoginApiService.prototype.post = function (path, data) {
        var fullPath = this.basePath + path;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: fullPath,
                method: 'POST',
                data: data,
                contentType: "application/x-www-form-urlencoded",
            }).done(function (data) {
                resolve(data);
            }).fail(function (error) {
                reject(error);
            });
        });
    };
    LoginApiService.prototype.put = function (path, data) {
        var fullPath = this.basePath + path;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: fullPath,
                method: 'PUT',
                data: data,
                contentType: "application/x-www-form-urlencoded",
            }).done(function (data) {
                resolve(data);
            }).fail(function (error) {
                reject(error);
            });
        });
    };
    return LoginApiService;
}());
LoginApiService.FB_LOGIN = '/user/login-facebook';
LoginApiService.GOOGLE_LOGIN = '/user/login-google';
LoginApiService.instance = null;
