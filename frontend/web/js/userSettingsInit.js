(function ($) {
    $(function () {

        $('.modal').modal();

        var view = new UserSettingsView(
            new UserSettingsPresenter()
        );
    }); // end of document ready
})(jQuery); // end of jQuery name space
