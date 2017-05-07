(function($){
    $(function(){
        $('.modal').modal();

        $('.dropdown-button-navbar').dropdown({
                inDuration: 300,
                outDuration: 120,
                constrainWidth: false, // Does not change width of dropdown to that of the activator
                hover: false, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'left', // Displays dropdown with edge aligned to the left of button
                stopPropagation: false // Stops event propagation
            }
        );

        var budgetView = new BudgetView(
            new BudgetPresenter()
        );

    }); // end of document ready
})(jQuery); // end of jQuery name space