var CategoryBuilder = (function () {
    function CategoryBuilder() {
        this.category = null;
        this.category = new Category();
    }
    CategoryBuilder.prototype.setId = function (value) {
        this.category.id = value;
        return this;
    };
    CategoryBuilder.prototype.setName = function (value) {
        this.category.name = value;
        return this;
    };
    CategoryBuilder.prototype.build = function () {
        var currentCategory = this.category;
        this.category = new Category();
        return currentCategory;
    };
    CategoryBuilder.prototype.buildFromApiResponse = function (apiResponse) {
        var tmpCategory = this.build();
        var newCategory = this.setId(apiResponse.id)
            .setName(apiResponse.name)
            .build();
        this.category = tmpCategory;
        return newCategory;
    };
    CategoryBuilder.prototype.buildApiResponse = function (category) {
        return {
            id: category.id,
            name: category.name,
        };
    };
    return CategoryBuilder;
}());
