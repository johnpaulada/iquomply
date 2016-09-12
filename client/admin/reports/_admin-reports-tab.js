Template.adminReportsTab.onCreated(function() {
    var instance = this;

    instance.subscribe('reports');

    instance.unit       = new ReactiveVar();
    instance.order      = new ReactiveVar();
    instance.display    = new ReactiveVar();
    instance.detailData = new ReactiveVar();

    instance.display.set('list');
    instance.order.set(-1);
    instance.unit.set('');

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

        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    },

    getDetails() {
        return Template.instance().detailData.get();
    },

    isListDisplayed() {
        return Template.instance().display.get() === 'list';
    },

    isDetailDisplayed() {
        return Template.instance().display.get() === 'details';
    },

    unit() {
        return Template.instance().unit.get();
    }
});

Template.adminReportsTab.events({
    'click button.view-report'(event, instance) {
        let index = $(event.target).parent().siblings('td.id-col').html();
        let unit  = $(event.target).parent().siblings('td.unit-col').html();

        instance.detailData.set(instance.reports()[index]);
        instance.display.set('details');
        instance.unit.set(unit);
    },

    'click a.back-btn'(event, instance) {
        instance.display.set('list');
    }
});
