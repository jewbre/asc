var GroupPresenter = (function () {
    function GroupPresenter() {
        this.view = null;
    }
    GroupPresenter.prototype.setGroupView = function (view) {
        this.view = view;
    };
    GroupPresenter.prototype.createNewGroup = function (name, members) {
        ApiService.getInstance()
            .createNewGroup(name, members)
            .then(function (group) {
            window.location.reload();
        });
    };
    GroupPresenter.prototype.selectGroup = function (id) {
        ApiService.getInstance()
            .selectGroup(id)
            .then(function (group) {
            window.location.reload();
        });
    };
    return GroupPresenter;
}());
