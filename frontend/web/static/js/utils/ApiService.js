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
        var fullPath = ApiService.USER_SEARCH + "?query=" + query;
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
    ApiService.prototype.deleteShoppingItem = function (id) {
        var _this = this;
        var fullPath = ApiService.DELETE_SHOPPING_ITEM + "?id=" + id;
        return new Promise(function (resolve, reject) {
            _this.deleteCall(fullPath)
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.finishShopping = function (items) {
        var _this = this;
        var apiItems = items.map(function (item) {
            return (new ItemBuilder()).buildApiResponse(item);
        });
        return new Promise(function (resolve, reject) {
            _this.post(ApiService.FINISH_SHOPPING, { items: apiItems })
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
    ApiService.prototype.createNewBill = function (category, amount, description, date, payer, participants) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(ApiService.CREATE_NEW_BILL, {
                category: category, amount: amount, description: description, date: date, payer: payer, participants: participants
            })
                .then(function (billApiResponse) {
                var bill = (new BillBuilder()).buildFromApiResponse(billApiResponse);
                resolve(bill);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.clearDebts = function (participants) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(ApiService.CLEAR_DEBTS, {
                participants: participants
            })
                .then(function (debtApiResponses) {
                var debts = debtApiResponses.map(function (debtApiResponse) {
                    return (new DebtBuilder()).buildFromApiResponse(debtApiResponse);
                });
                resolve(debts);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.createNewGroup = function (name, members) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(ApiService.CREATE_NEW_GROUP, {
                name: name,
                members: members
            })
                .then(function (groupApiResponse) {
                var group = (new GroupBuilder()).buildFromApiResponse(groupApiResponse);
                resolve(group);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.selectGroup = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(ApiService.SELECT_GROUP, {
                id: id
            })
                .then(function (groupApiResponse) {
                var group = (new GroupBuilder()).buildFromApiResponse(groupApiResponse);
                resolve(group);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.updateBill = function (id, category, amount, description, date, payer, participants) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var finalPath = ApiService.UPDATE_BILL + "?id=" + id;
            _this.put(finalPath, {
                category: category, amount: amount, description: description, date: date, payer: payer, participants: participants
            })
                .then(function (billApiResponse) {
                var bill = (new BillBuilder()).buildFromApiResponse(billApiResponse);
                resolve(bill);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.deleteBill = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var finalPath = ApiService.DELETE_BILL + "?id=" + id;
            _this.deleteCall(finalPath)
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.updateUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var finalPath = ApiService.UPDATE_USER + "?id=" + user.id;
            _this.put(finalPath, {
                username: user.username
            })
                .then(function (userApiResponse) {
                var user = (new UserBuilder()).buildFromApiResponse(userApiResponse);
                resolve(user);
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
    ApiService.prototype.getDebts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(ApiService.DEBTS)
                .then(function (debtApiResponses) {
                var debts = debtApiResponses.map(function (debtApiResponse) {
                    return (new DebtBuilder()).buildFromApiResponse(debtApiResponse);
                });
                resolve(debts);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.getBills = function (page) {
        var _this = this;
        var finalUrl = "" + ApiService.GET_BILLS + (page ? '?page=' + page : '');
        return new Promise(function (resolve, reject) {
            _this.get(finalUrl)
                .then(function (paginatedResponse) {
                var bills = paginatedResponse.items.map(function (billApiResponse) {
                    return (new BillBuilder()).buildFromApiResponse(billApiResponse);
                });
                resolve({
                    bills: bills,
                    pagination: paginatedResponse._pagination
                });
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.getBillCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(ApiService.BILL_CATEGORIES_LIST)
                .then(function (categoryApiResponses) {
                var categories = categoryApiResponses.map(function (categoryApiResponse) {
                    return (new BillCategoryBuilder()).buildFromApiResponse(categoryApiResponse);
                });
                resolve(categories);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.getMe = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(ApiService.ME)
                .then(function (userApiResponse) {
                var user = (new UserBuilder()).buildFromApiResponse(userApiResponse);
                $(document).trigger('user', { user: user });
                resolve(user);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.getGroupMembers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(ApiService.GROUP_MEMBER_LIST)
                .then(function (userApiResponse) {
                var users = userApiResponse.map(function (userApiResponse) {
                    return (new UserBuilder()).buildFromApiResponse(userApiResponse);
                });
                resolve(users);
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
    ApiService.prototype.getMineBudget = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(ApiService.BUDGET_MINE)
                .then(function (budgetApiResponse) {
                resolve((new BudgetBuilder()).buildFromApiResponse(budgetApiResponse));
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.addToBudget = function (amount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(ApiService.BUDGET_ADD, { amount: amount })
                .then(function (budgetApiResponse) {
                resolve((new BudgetBuilder()).buildFromApiResponse(budgetApiResponse));
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
    ApiService.prototype.deleteCall = function (path) {
        var _this = this;
        var fullPath = this.basePath + path;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: fullPath,
                method: 'DELETE',
                headers: {
                    'Authorization': "Bearer " + _this.token
                },
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
ApiService.SHOPPING_ITEMS_LIST = '/shopping-item/';
ApiService.DELETE_SHOPPING_ITEM = '/shopping-item/delete/';
ApiService.FINISH_SHOPPING = '/shopping-item/finish-shopping/';
ApiService.CREATE_SHOPPING_ITEM = '/shopping-item/create//';
ApiService.UPDATE_SHOPPING_ITEM = '/shopping-item/update//';
ApiService.CHECK_SHOPPING_ITEM = '/shopping-item/check//';
ApiService.UNCHECK_SHOPPING_ITEM = '/shopping-item/uncheck//';
ApiService.SHOPPING_CATEGORIES_LIST = '/shopping-category/';
ApiService.BUDGET_MINE = '/budget/mine/';
ApiService.BUDGET_ADD = '/budget/add/';
ApiService.GET_BILLS = '/bill/';
ApiService.DELETE_BILL = '/bill/delete/';
ApiService.BILL_CATEGORIES_LIST = '/bill-category/';
ApiService.CREATE_NEW_BILL = '/bill/create/';
ApiService.UPDATE_BILL = '/bill/update/';
ApiService.GROUP_MEMBER_LIST = '/group/members/';
ApiService.CREATE_NEW_GROUP = '/group/create/';
ApiService.SELECT_GROUP = '/group/select/';
ApiService.ME = '/user/me/';
ApiService.UPDATE_USER = '/user/update/';
ApiService.USER_SEARCH = '/user/search/';
ApiService.DEBTS = '/debt/';
ApiService.CLEAR_DEBTS = '/debt/clear/';
ApiService.instance = null;
