UserDashboardController = RouteController.extend({
    layoutTemplate: 'userDashboardLayout',
    template: 'userProgressTab',

    onBeforeAction: function() {
        if (Meteor.user()) {
            if (!Meteor.userId()) {
                Router.go('/login');
            } else if (Meteor.user().newUser) {
                Router.go('/change-password');
            }
        } else {
            Router.go('/login');
        }

        this.next();
    },

    action: function() {
        this.render();
    }
});
