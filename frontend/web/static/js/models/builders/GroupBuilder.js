var GroupBuilder = (function () {
    function GroupBuilder() {
        this.group = null;
        this.group = new Group();
    }
    GroupBuilder.prototype.setId = function (value) {
        this.group.id = value;
        return this;
    };
    GroupBuilder.prototype.setName = function (value) {
        this.group.name = value;
        return this;
    };
    GroupBuilder.prototype.setMembers = function (value) {
        this.group.members = value;
        return this;
    };
    GroupBuilder.prototype.build = function () {
        var currentGroup = this.group;
        this.group = new Group();
        return currentGroup;
    };
    GroupBuilder.prototype.buildFromApiResponse = function (apiResponse) {
        var tmpGroup = this.build();
        var newGroup = this.setId(apiResponse.id)
            .setName(apiResponse.name)
            .setMembers(apiResponse.members.map(function (userApiResponse) {
            return (new UserBuilder()).buildFromApiResponse(userApiResponse);
        }))
            .build();
        this.group = tmpGroup;
        return newGroup;
    };
    GroupBuilder.prototype.buildApiResponse = function (group) {
        return {
            id: group.id,
            name: group.name,
            members: group.members.map(function (member) { return (new UserBuilder()).buildApiResponse(member); })
        };
    };
    return GroupBuilder;
}());
