var BillCategoryBuilder = (function () {
    function BillCategoryBuilder() {
        this.category = null;
        this.category = new BillCategory();
    }
    BillCategoryBuilder.prototype.setId = function (value) {
        this.category.id = value;
        return this;
    };
    BillCategoryBuilder.prototype.setName = function (value) {
        this.category.name = value;
        return this;
    };
    BillCategoryBuilder.prototype.build = function () {
        var currentBillCategory = this.category;
        this.category = new BillCategory();
        return currentBillCategory;
    };
    BillCategoryBuilder.prototype.buildFromApiResponse = function (apiResponse) {
        var tmpBillCategory = this.build();
        var newBillCategory = this.setId(apiResponse.id)
            .setName(apiResponse.name)
            .build();
        this.category = tmpBillCategory;
        return newBillCategory;
    };
    BillCategoryBuilder.prototype.buildApiResponse = function (category) {
        return {
            id: category.id,
            name: category.name,
        };
    };
    return BillCategoryBuilder;
}());
