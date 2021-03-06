CreateAccountController = RouteController.extend({
    onBeforeAction: function() {
        if (Meteor.user()) {
            if (!Meteor.userId()) {
                Router.go('/login');
            } else if (Meteor.user().new) {
                Router.go('/change-password');
            }

            if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-admin'])) {
                Router.go('/user-dashboard');
            }
        }

        this.next();
    },

    action: function() {
        this.render('signup');
    }
});
