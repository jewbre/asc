(function($){
    $(function(){

        $('.modal').modal();
        $('select').material_select();

        var view = new ShoppingListView(
            new ShoppingListPresenter()
        );

    }); // end of document ready
})(jQuery); // end of jQuery name space