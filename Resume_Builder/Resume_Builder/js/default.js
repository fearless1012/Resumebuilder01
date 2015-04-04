// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();

function validateForm() {
    var email = document.getElementById('demail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
       var msg = new Windows.UI.Popups.MessageDialog("Please provide a proper email");
        msg.showAsync();
        email.focus;
        return false;
    }

}

function putresume() {

    var x1 = document.forms["myForm"]["dname"].value;
    var x2 = document.forms["myForm"]["gender"].value;
    var x3 = document.forms["myForm"]["demail"].value;
    var x4 = document.forms["myForm"]["street_address"].value;
    var x5 = document.forms["myForm"]["City"].value;
    var x6 = document.forms["myForm"]["state"].value;
    var x6 = document.forms["myForm"]["Zip"].value;
    var x7 = document.forms["myForm"]["Country"].value;
    var x8 = document.forms["myForm"]["School"].value;
    var x9 = document.forms["myForm"]["Feild"].value;
    var x10 = document.forms["myForm"]["Degree"].value;
    var x11 = document.forms["myForm"]["year"].value;
}