var GroupView = (function () {
    function GroupView(presenter) {
        this.presenter = null;
        this.members = [];
        this.presenter = presenter;
        this.presenter.setGroupView(this);
        this.initListeners();
    }
    GroupView.prototype.initListeners = function () {
        var _this = this;
        $('#createGroupBtn').on('click', function () {
            _this.addNewGroup();
        });
        $('.select-group').on('click', function (event) {
            console.log($(event.currentTarget), $(event.currentTarget).data('id'));
            var id = $(event.currentTarget).data('id');
            _this.selectGroup(id);
        });
        $('#member').on('keypress', function (event) {
            if (event.charCode == 13) {
                console.log("pressed");
            }
        });
    };
    GroupView.prototype.addMember = function (email) {
        if (this.members.filter(function (item) { return email == item; }).length == 0) {
            this.renderMember(email).appendTo($('#ul'));
            // TODO: user list
        }
    };
    GroupView.prototype.renderMember = function (email) {
        var _this = this;
        var renderer = new Renderer();
        var member = $(renderer.getRenderedMemberForGroup(email));
        member.find('i').on('click', function () {
            _this.members = _this.members.filter(function (item) { return item == email; });
            member.remove();
        });
        return member;
    };
    GroupView.prototype.addNewGroup = function () {
        this.presenter.createNewGroup($('#group_name').val(), $('#group_members').val());
    };
    GroupView.prototype.selectGroup = function (id) {
        this.presenter.selectGroup(id);
    };
    return GroupView;
}());
