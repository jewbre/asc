var ApiService = (function () {
    function ApiService() {
        this.token = '';
        this.basePath = '';
        this.token = JSON.parse(document.getElementById('api-token').innerText);
        this.basePath = JSON.parse(document.getElementById('api-base-path').innerText);
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
    ApiService.prototype.getShoppingListItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(ApiService.SHOPPING_ITEMS_LIST)
                .then(function (itemApiResponses) {
                var items = itemApiResponses.map(function (itemApiResponse) {
                    return (new ItemBuilder()).buildFromApiResponse(itemApiResponse);
                });
                resolve(items);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.getShoppingCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(ApiService.SHOPPING_CATEGORIES_LIST)
                .then(function (categoryApiResponses) {
                var categories = categoryApiResponses.map(function (categoryApiResponse) {
                    return (new CategoryBuilder()).buildFromApiResponse(categoryApiResponse);
                });
                resolve(categories);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.createNewShoppingItem = function (name, category, reminder) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(ApiService.CREATE_SHOPPING_ITEM, { name: name, category: category, reminder: reminder })
                .then(function (itemApiResponse) {
                resolve((new ItemBuilder()).buildFromApiResponse(itemApiResponse));
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.updateShoppingItem = function (id, name, category, details) {
        var _this = this;
        var url = ApiService.UPDATE_SHOPPING_ITEM + "?id=" + id;
        return new Promise(function (resolve, reject) {
            _this.put(url, { name: name, category: category, details: details })
                .then(function (itemApiResponse) {
                resolve((new ItemBuilder()).buildFromApiResponse(itemApiResponse));
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.checkShoppingItem = function (id) {
        var _this = this;
        var url = ApiService.CHECK_SHOPPING_ITEM + "?id=" + id;
        return new Promise(function (resolve, reject) {
            _this.get(url)
                .then(function (itemApiResponse) {
                resolve((new ItemBuilder()).buildFromApiResponse(itemApiResponse));
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.uncheckShoppingItem = function (id) {
        var _this = this;
        var url = ApiService.UNCHECK_SHOPPING_ITEM + "?id=" + id;
        return new Promise(function (resolve, reject) {
            _this.get(url)
                .then(function (itemApiResponse) {
                resolve((new ItemBuilder()).buildFromApiResponse(itemApiResponse));
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.get = function (path) {
        var _this = this;
        var fullPath = this.basePath + path;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: fullPath,
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + _this.token
                },
            }).done(function (data) {
                resolve(data);
            }).fail(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.post = function (path, data) {
        var _this = this;
        var fullPath = this.basePath + path;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: fullPath,
                method: 'POST',
                headers: {
                    'Authorization': "Bearer " + _this.token
                },
                data: data,
                contentType: "application/x-www-form-urlencoded",
            }).done(function (data) {
                resolve(data);
            }).fail(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.put = function (path, data) {
        var _this = this;
        var fullPath = this.basePath + path;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: fullPath,
                method: 'PUT',
                headers: {
                    'Authorization': "Bearer " + _this.token
                },
                data: data,
                contentType: "application/x-www-form-urlencoded",
            }).done(function (data) {
                resolve(data);
            }).fail(function (error) {
                reject(error);
            });
        });
    };
    return ApiService;
}());
ApiService.SHOPPING_ITEMS_LIST = '/shopping-item';
ApiService.CREATE_SHOPPING_ITEM = '/shopping-item/create/';
ApiService.UPDATE_SHOPPING_ITEM = '/shopping-item/update/';
ApiService.CHECK_SHOPPING_ITEM = '/shopping-item/check/';
ApiService.UNCHECK_SHOPPING_ITEM = '/shopping-item/uncheck/';
ApiService.SHOPPING_CATEGORIES_LIST = '/shopping-category';
ApiService.instance = null;
