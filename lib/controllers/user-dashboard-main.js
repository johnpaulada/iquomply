UserDashboardController = RouteController.extend({
    layoutTemplate: 'userDashboardLayout',
    template: 'userProgressTab',

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
