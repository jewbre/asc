(function($){
    $(function(){
        $('select').material_select();

        $('.datepicker').pickadate();

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

        var presenter = new BillsPresenterImpl();
        var budgetView = new BudgetView(
            presenter
        );

        var billsView = new BillView(
            presenter
        );

        var debtView = new DebtView(
            presenter
        );

        presenter.getNextBillsPage();
        presenter.getBillCategories();
        presenter.getGroupMembers();
        presenter.getMe();

    }); // end of document ready
})(jQuery); // end of jQuery name space