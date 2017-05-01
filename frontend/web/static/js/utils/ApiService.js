var ApiService = (function () {
    function ApiService() {
        this.token = '';
        this.token = JSON.parse(document.getElementById('api-token').innerText);
    }
    ApiService.getInstance = function () {
        if (ApiService.instance == null) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    };
    ApiService.prototype.searchUsers = function (query) {
        var _this = this;
        var fullPath = "/asc/backend/web/api/user/search?query=" + query;
        return new Promise(function (resolve, reject) {
            _this.get(fullPath)
                .then(function (userApiResponses) {
                var users = userApiResponses.map(function (userApiResponse) {
                    return (new UserBuilder()).buildFromApiResponse(userApiResponse);
                });
                resolve(users);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.get = function (path) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: path,
                method: 'GET',
            }).done(function (data) {
                resolve(data);
            }).fail(function (error) {
                reject(error);
            });
        });
    };
    return ApiService;
}());
ApiService.instance = null;
