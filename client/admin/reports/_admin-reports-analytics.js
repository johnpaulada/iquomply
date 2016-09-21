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
        return getHospitalWide();
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
    import ActionExtractor from '../../lib/ActionExtractor';

    const user = Meteor.users.findOne({'profile.unit': unit});
    const name = user.profile.first_name + ' ' + user.profile.last_name;
    const report = Reports.findOne({'userId': user._id}, {sort: {'dateSubmitted': -1}});
    const answers = AnswerCounter.count(report.progress);
    const complianceRatio = answers.yes / answers.total;

    if (complianceRatio > 0.9) {
        return `${unit} is performing well, with a compliance ratio of ${complianceRatio * 100}%`;
    } else {
        const statusText = `${unit} is not performing well, with a compliance ratio of ${complianceRatio * 100}%. Please contact ${user.profile.first_name} ${user.profile.last_name}.`;

        const actions            = ActionExtractor.extract(report.progress);

        const stringifiedActions = actions.map(function(value) {
            const name = value.name;
            const transformed = value.actions.reduce(function(previous, current) { return `${previous}${current}\n` }, '');

            return `Chapter: ${name}\n${stringifiedActions}`;
        });

        const actionsText = actions.reduce((previous, current) => `${previous}\n${current}`, '');

        console.log(actions);
        console.log(stringifiedActions);
        console.log(actionsText);

        return statusText;
    }

    // TODO: If less, contact person responsible and prioritize actions to be done

    return unit;
}
