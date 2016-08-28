UserDashboardController = RouteController.extend({
    layoutTemplate: 'userDashboardLayout',
    template: 'userProgressTab',

    onBeforeAction: function() {
        if (Meteor.user()) {
            if (!Meteor.userId()) {
                Router.go('/login');
            } else if (Meteor.user().new) {
                Router.go('/change-password');
            }
        }

        this.next();
    },

    action: function() {
        this.render();
    }
});
