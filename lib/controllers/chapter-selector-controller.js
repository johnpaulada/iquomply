ChapterSelectorController = RouteController.extend({
    layoutTemplate: 'userDashboardLayout',
    template: 'chapterSelector',

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
