var Renderer = (function () {
    function Renderer() {
    }
    Renderer.prototype.getRenderedItem = function (item) {
        return "\n        <li class=\"row shopping-card\" data-id=\"" + item.id + "\" data-value=\"" + item.name + "\">\n            <div class=\"col s12 m12 l12\">\n                <div class=\"card darken-1 hoverable\">\n                    <div class=\"card-content black-text\">\n                        <p class=\"inline-block\">\n                            <input type=\"checkbox\" class=\"filled-in\" id=\"filled-in-box-" + item.id + "\" " + (item.isChecked ? 'checked="checked"' : '') + "/>\n                            <label for=\"filled-in-box-" + item.id + "\">" + item.name + "</label>\n                            " + (item.details ? '<br><span class="details">' + item.details + '</span>' : '') + " \n                        </p>\n                        <div class=\"right\">\n                            <a href=\"#addNewShoppingListModal\" class=\"modal-trigger\"><i class=\"material-icons left\">mode_edit</i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </li>\n        ";
    };
    Renderer.prototype.getRenderedShoppingItem = function (item) {
        return "<li class=\"collection-item avatar valign-wrapper " + (item.isBought ? 'checked' : '') + "\" id=\"shopping-item-" + item.id + "\">\n            <i class=\"material-icons circle deep-purple item-add\">add_shopping_cart</i>\n            <i class=\"material-icons circle deep-purple item-delete md-36\">remove_circle</i>\n            <div>\n                <span class=\"title\">" + item.name + "</span>\n                " + (item.details ? "<p>" + item.details + "</p>" : '') + "\n            </div>\n        </li>";
    };
    Renderer.prototype.getRenderedCategory = function (category) {
        return "\n        <ul data-category=\"" + category.name + "\">\n            <h4>" + category.name + "</h4>\n        </ul>\n        ";
    };
    Renderer.prototype.getRenderedSelectCategoryItem = function (category) {
        return "<option value=\"" + category.id + "\">" + category.name + "</option>";
    };
    Renderer.prototype.getRenderedSelectUserItem = function (user) {
        return "<option value=\"" + user.id + "\" data-icon=\"" + user.avatar + "\" class=\"left circle\">" + user.username + "</option>";
    };
    Renderer.prototype.getRenderedSelectBillCategoryItem = function (category) {
        return "<option value=\"" + category.id + "\">" + category.name + "</option>";
    };
    Renderer.prototype.getRenderedBillsCategory = function (category) {
        return "\n        <ul class=\"col s12\" data-category=\"" + category + "\">\n            <p class=\"bill-card-title\">" + category + "</p>\n        </ul>\n        ";
    };
    Renderer.prototype.getRenderedBillCard = function (bill) {
        return "\n        <li class=\"card col s12 l6 row valign-wrapper bill-card\" id=\"bill-card-" + bill.id + "\">\n            <div class=\"col s3 l3 bill-participants\">\n                <img class=\"circle main\" src=\"" + bill.payer.avatar + "\"/>\n                " + (bill.group.members.length <= 2 ? '' : "\n                <img class=\"circle first\" src=\"" + bill.participants[0].avatar + "\"/>\n                " + (bill.participants.length <= 1 ? '' :
            "\n                    " + (bill.participants.length <= 2 ? '' :
                "<img class=\"circle second\" src=\"" + bill.participants[1].avatar + "\"/>") + "\n                    " + (bill.participants.length == 2 ?
                "<img class=\"circle third\" src=\"" + bill.participants[1].avatar + "\"/>" : '') + "\n                    " + (bill.participants.length == 3 ?
                "<img class=\"circle third\" src=\"" + bill.participants[2].avatar + "\"/>" : '') + "\n                    " + (bill.participants.length > 3 ?
                "<span class=\"deep-purple white-text third\">+" + (bill.participants.length - 3) + "</span>" : '') + "\n                    ")) + "\n            </div>\n            <div class=\"col s5 l5\">\n                <span class=\"category deep-purple-text\">" + bill.category.name + "</span>\n                <span class=\"description\">" + bill.description + "</span>\n                <span class=\"date\">" + bill.getFormatedDate() + "</span>\n            </div>\n            <div class=\"col s4 l3\">\n                <span class=\"amount\">" + bill.amount + " kn</span>\n            </div>\n        </li>\n        ";
    };
    return Renderer;
}());
