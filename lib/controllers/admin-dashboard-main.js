AdminDashboardController = RouteController.extend({
    layoutTemplate: 'adminDashboardLayout',
    template: 'adminStatisticsTab',

    onBeforeAction: function() {
        if (Meteor.user()) {
            if (!Meteor.userId()) {
                Router.go('/login');
            } else if (!Roles.userIsInRole( Meteor.userId(), ['admin', 'super-admin'] )) {
                Router.go('/user-dashboard');
            } else {
                this.next();
            }
        }
    },

    action: function() {
        this.render();
    }
});
