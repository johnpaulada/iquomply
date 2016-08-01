Template.nav.events({
    'click #logout-btn': function(event, instance) {
        event.preventDefault();

        Meteor.logout(function(error) {
            if (error) {
                swal({
                    title: "Oops...",
                    text: error.reason,
                    html: true,
                    type: "error"
                });
            } else {
                Router.go('/');
            }
        });
    }
});
