var BillBuilder = (function () {
    function BillBuilder() {
        this.bill = null;
        this.bill = new Bill();
    }
    BillBuilder.prototype.setId = function (value) {
        this.bill.id = value;
        return this;
    };
    BillBuilder.prototype.setDescription = function (value) {
        this.bill.description = value;
        return this;
    };
    BillBuilder.prototype.setCategory = function (value) {
        this.bill.category = value;
        return this;
    };
    BillBuilder.prototype.setAmount = function (value) {
        this.bill.amount = value;
        return this;
    };
    BillBuilder.prototype.setDate = function (value) {
        this.bill.date = value;
        return this;
    };
    BillBuilder.prototype.setPayer = function (value) {
        this.bill.payer = value;
        return this;
    };
    BillBuilder.prototype.setParticipants = function (value) {
        this.bill.participants = value;
        return this;
    };
    BillBuilder.prototype.setGroup = function (value) {
        this.bill.group = value;
        return this;
    };
    BillBuilder.prototype.build = function () {
        var currentBill = this.bill;
        this.bill = new Bill();
        return currentBill;
    };
    BillBuilder.prototype.buildFromApiResponse = function (apiResponse) {
        var tmpBill = this.build();
        var newBill = this.setId(apiResponse.id)
            .setDescription(apiResponse.description)
            .setDate(apiResponse.date)
            .setCategory((new BillCategoryBuilder()).buildFromApiResponse(apiResponse.category))
            .setPayer((new UserBuilder()).buildFromApiResponse(apiResponse.payer))
            .setParticipants(apiResponse.participants.map(function (userApiResponse) {
            return (new UserBuilder()).buildFromApiResponse(userApiResponse);
        }))
            .setAmount(apiResponse.amount)
            .setGroup((new GroupBuilder()).buildFromApiResponse(apiResponse.group))
            .build();
        this.bill = tmpBill;
        return newBill;
    };
    return BillBuilder;
}());
