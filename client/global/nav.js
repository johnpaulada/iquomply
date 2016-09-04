Template.nav.helpers({
    'adminActiveClass'() {
        var currentRoute = Router.current().route.getName();

        return ~currentRoute.indexOf('admin') ? 'active' : ''
    },

    'userActiveClass'() {
        var currentRoute = Router.current().route.getName();

        return ~currentRoute.indexOf('user') ? 'active' : ''
    }
});

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
