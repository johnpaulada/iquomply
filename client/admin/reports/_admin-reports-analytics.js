Template.adminReportsAnalytics.onCreated(function() {
    var instance = this;

    instance.subscribe('reports');
    instance.subscribe('units');

    instance.units = () => Units.find().fetch();
});

Template.adminReportsAnalytics.helpers({
    units() {
        return Template.instance().units();
    },

    hospitalWide() {
        return hospitalWide();
    }
});

Template.adminReportsAnalytics.events({
    'click #show-analytics-btn': function(event, instance) {
        let unit = $('#unit-selection-input').val();
        swal(`${unit} Analytics`, getAnalytics(unit));
    }
});

function getHospitalWide() {
    return '';
}

function getAnalytics(unit) {
    return unit;
}
