var UserBuilder = (function () {
    function UserBuilder() {
        this.user = null;
        this.user = new User();
    }
    UserBuilder.prototype.setId = function (value) {
        this.user.id = value;
        return this;
    };
    UserBuilder.prototype.setUsername = function (value) {
        this.user.username = value;
        return this;
    };
    UserBuilder.prototype.setEmail = function (value) {
        this.user.email = value;
        return this;
    };
    UserBuilder.prototype.setAvatar = function (value) {
        this.user.avatar = value;
        return this;
    };
    UserBuilder.prototype.build = function () {
        var currentUser = this.user;
        this.user = new User();
        return currentUser;
    };
    UserBuilder.prototype.buildFromApiResponse = function (apiResponse) {
        var tmpUser = this.build();
        var newUser = this.setId(apiResponse.id)
            .setEmail(apiResponse.email)
            .setUsername(apiResponse.username)
            .setAvatar(apiResponse.avatar)
            .build();
        this.user = tmpUser;
        return newUser;
    };
    return UserBuilder;
}());
