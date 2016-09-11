Template.adminReportsStatistics.onCreated(function() {
    var instance = this;

    instance.unitShouldLoad = new ReactiveVar();
    instance.unitChartData  = new ReactiveVar();

    instance.unitShouldLoad.set(false);
    instance.unitChartData.set(UnitChartDataGenerator.generate());
});

Template.adminReportsStatistics.helpers({
    unitComplianceChartData: function() {
        return Template.instance().unitChartData.get();
    },
    unitShouldLoad() {
        return Template.instance().unitShouldLoad.get();
    }
});

Template.adminReportsStatistics.onRendered(function() {
    var details       = this.data.details;
    var answers       = AnswerCounter.count(details.progress);
    var unitChartData = Template.instance().unitChartData.get();

    unitChartData.datasets[0].data[0] = answers.yes;
    unitChartData.datasets[0].data[1] = answers.no;
    unitChartData.datasets[0].data[2] = answers.partially;

    Template.instance().unitChartData.set(unitChartData);
    Template.instance().unitShouldLoad.set(true);
});
