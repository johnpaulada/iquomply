UserAnalyticsController = RouteController.extend({
    layoutTemplate: 'userDashboardLayout',
    template: 'userAnalyticsTab',

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
