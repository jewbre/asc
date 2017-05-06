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
    return Renderer;
}());
