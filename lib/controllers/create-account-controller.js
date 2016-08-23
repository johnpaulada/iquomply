CreateAccountController = RouteController.extend({
    onBeforeAction: function() {
        if (Meteor.user()) {
            if (!Meteor.userId()) {
                Router.go('/login');
            } else if (!Roles.userIsInRole(Meteor.userId(), ['admin', 'super-admin'], 'iquomply')) {
                Router.go('/');
            } else {
                this.next();
            }
        }
    },

    action: function() {
        this.render('signup');
    }
});
