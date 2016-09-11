Template.adminReportsTab.onCreated(function() {
    var instance = this;

    instance.subscribe('reports');

    instance.order = new ReactiveVar();
    instance.order.set(-1);

    instance.display = new ReactiveVar();
    instance.display.set('list');

    instance.reports = function() {
        return Reports.find({}, {sort: { dateSubmitted: instance.order.get() }}).fetch();
    };
});

Template.adminReportsTab.helpers({
    reports() {
        return Template.instance().reports();
    },

    getUser(userId) {
        return Meteor.users.findOne(userId);
    },

    getDate(date) {
        const months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];

        return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    },

    isListDisplayed() {
        return Template.instance().display.get() === 'list';
    },

    isDetailDisplayed() {
        return Template.instance().display.get() === 'details';
    }
});
