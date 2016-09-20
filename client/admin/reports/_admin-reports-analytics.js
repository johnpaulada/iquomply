Template.adminReportsAnalytics.onCreated(function() {
    var instance = this;

    instance.subscribe('reports');
    instance.subscribe('units');

    instance.units = () => Units.find().fetch();
});

Template.adminReportsAnalytics.helpers({
    units() {
        return Template.instance().units();
    }
});
