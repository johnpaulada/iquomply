Template.adminReportsStatistics.onCreated(function() {
    var instance = this;

    instance.unitShouldLoad = new ReactiveVar();
    instance.unitChartData  = new ReactiveVar();
    instance.userChartData  = new ReactiveVar();

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
    {
        let details       = this.data.details;
        let answers       = AnswerCounter.count(details.progress);
        let unitChartData = Template.instance().unitChartData.get();

        unitChartData.datasets[0].data[0] = answers.yes;
        unitChartData.datasets[0].data[1] = answers.no;
        unitChartData.datasets[0].data[2] = answers.partially;

        Template.instance().unitChartData.set(unitChartData);
    }

    {
        let details       = this.data.details;
        let answers       = AnswerCounter.count(details.progress);
        let userChartData = Template.instance().userChartData.get();

        userChartData.datasets[0].data[0] = answers.yes;
        userChartData.datasets[0].data[1] = answers.no;
        userChartData.datasets[0].data[2] = answers.partially;

        Template.instance().userChartData.set(userChartData);
    }

    Template.instance().unitShouldLoad.set(true);
});
