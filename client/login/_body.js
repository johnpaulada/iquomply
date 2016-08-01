Template.loginBody.events({
    'click #login-user-btn': function(event, instance) {
        var formInput = {
            'username': $('.username-input').val(),
            'password': $('.password-input').val()
        }

        Meteor.loginWithPassword(formInput.username, formInput.password, function(error) {
            if (error) {
                swal({
                    title: "Oops...",
                    text: error.reason,
                    html: true,
                    type: "error"
                });
            } else {
                Router.go('/user-dashboard');
            }
        });
    }
});
