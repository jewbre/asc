(function ($) {
    $(function () {

        $('.modal').modal();

        var view = new GroupView(
            new GroupPresenter()
        );

        var userData = JSON.parse($('#user-list').text());

        $('input.autocomplete').autocomplete({
            data: userData,
            limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
            onAutocomplete: function(val) {
                // Callback function when value is autcompleted.
                console.log('now');
            },
            minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
