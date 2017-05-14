var UserSettingsView = (function () {
    function UserSettingsView(presenter) {
        this.presenter = null;
        this.user = null;
        this.presenter = presenter;
        this.presenter.setView(this);
        this.initListeners();
    }
    UserSettingsView.prototype.initListeners = function () {
        var _this = this;
        $('#updateUserBtn').on('click', function () {
            _this.onUpdate();
        });
    };
    UserSettingsView.prototype.setUser = function (user) {
        this.user = user;
        $('.name').text(user.username);
        $('#user_name').val(user.username);
        Materialize.updateTextFields();
    };
    UserSettingsView.prototype.onUpdate = function () {
        this.user.username = $('#user_name').val();
        this.presenter.updateUser(this.user);
    };
    UserSettingsView.prototype.hidePopup = function () {
        $('#userSettingsModal').modal('close');
    };
    return UserSettingsView;
}());
