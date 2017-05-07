var ItemBuilder = (function () {
    function ItemBuilder() {
        this.item = null;
        this.item = new Item();
    }
    ItemBuilder.prototype.setId = function (value) {
        this.item.id = value;
        return this;
    };
    ItemBuilder.prototype.setName = function (value) {
        this.item.name = value;
        return this;
    };
    ItemBuilder.prototype.setCategory = function (value) {
        this.item.category = value;
        return this;
    };
    ItemBuilder.prototype.setDetails = function (value) {
        this.item.details = value;
        return this;
    };
    ItemBuilder.prototype.setIsChecked = function (value) {
        this.item.isChecked = value;
        return this;
    };
    ItemBuilder.prototype.setIsBought = function (value) {
        this.item.isBought = value;
        return this;
    };
    ItemBuilder.prototype.build = function () {
        var currentItem = this.item;
        this.item = new Item();
        return currentItem;
    };
    ItemBuilder.prototype.buildFromApiResponse = function (apiResponse) {
        var tmpItem = this.build();
        var newItem = this.setId(apiResponse.id)
            .setName(apiResponse.name)
            .setCategory((new CategoryBuilder()).buildFromApiResponse(apiResponse.category))
            .setIsChecked(apiResponse.isChecked)
            .setIsBought(apiResponse.isBought)
            .setDetails(apiResponse.details)
            .build();
        this.item = tmpItem;
        return newItem;
    };
    ItemBuilder.prototype.buildApiResponse = function (item) {
        return {
            id: item.id,
            name: item.name,
            details: item.details,
            isChecked: item.isChecked,
            isBought: item.isBought,
            category: (new CategoryBuilder).buildApiResponse(item.category)
        };
    };
    return ItemBuilder;
}());
