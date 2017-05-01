(function($){
    $(function(){

        $('.modal').modal();

        var view = new ShoppingListView(
            new ShoppingListPresenter()
        );

    }); // end of document ready
})(jQuery); // end of jQuery name space