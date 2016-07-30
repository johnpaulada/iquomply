Template.signupBody.events({
    'click #create-user-btn': function() {
        var username  = "";
        var firstName = "";
        var lastName  = "";
        var password  = "";

        Accounts.createUser({
            "username": username,
            "firstName": firstName,
            "lastName": lastName,
            "password": password
        }, function(error) {
            if (error) {
                sweetAlert("Oops...", error.reason, "error");
            } else {
                // TODO: Erase input
                swal("Great Job!", "You successfully created a user!", "success")
            }
        });
    }
});
