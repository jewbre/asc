var UserSettingsPresenter = (function () {
    function UserSettingsPresenter() {
        var _this = this;
        this.view = null;
        $(document).on('user', function (event, data) {
            _this.view.setUser(data.user);
        });
    }
    UserSettingsPresenter.prototype.setView = function (view) {
        this.view = view;
    };
    UserSettingsPresenter.prototype.updateUser = function (user) {
        var _this = this;
        ApiService.getInstance()
            .updateUser(user)
            .then(function (user) {
            $(document).trigger('user', { user: user });
            _this.view.setUser(user);
            _this.view.hidePopup();
        });
    };
    return UserSettingsPresenter;
}());
