Template.adminReportsStatistics.onCreated(function() {
    var instance = this;

    instance.unit           = new ReactiveVar();
    instance.unitShouldLoad = new ReactiveVar();
    instance.unitChartData  = new ReactiveVar();
    instance.userChartData  = new ReactiveVar();

    instance.unit.set('');
    instance.unitShouldLoad.set(false);
    instance.unitChartData.set(UnitChartDataGenerator.generate());
    instance.userChartData.set(UserChartDataGenerator.generate());
});

Template.adminReportsStatistics.helpers({
    unitComplianceChartData: function() {
        return Template.instance().unitChartData.get();
    },
    userComplianceChartData: function() {
        return Template.instance().userChartData.get();
    },
    unitShouldLoad() {
        return Template.instance().unitShouldLoad.get();
    }
});

Template.adminReportsStatistics.onRendered(function() {
    let details       = this.data.details;
    let unit          = this.data.unit;
    let answers       = AnswerCounter.count(details.progress);
    let unitChartData = Template.instance().unitChartData.get();
    let userChartData = Template.instance().userChartData.get();

    unitChartData.datasets[0].data = [answers.yes, answers.no, answers.partially];
    userChartData.datasets[0].data = [answers.yes, answers.no + answers.partially];

    Template.instance().unit.set(unit);
    Template.instance().unitChartData.set(unitChartData);
    Template.instance().userChartData.set(userChartData);
    Template.instance().unitShouldLoad.set(true);
});
