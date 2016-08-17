UserReportsController = RouteController.extend({
    layoutTemplate: 'userDashboardLayout',
    template: 'userReportsTab',

    onBeforeAction: function() {
        if (!Meteor.userId()) {
            Router.go('/login');
        } else {
            this.next();
        }
    },

    action: function() {
        this.render();
    }
});
