Template.userAnalyticsTab.onCreated(function() {
    var instance = this;

    instance.cacheBuster = new ReactiveVar();
    instance.cacheBuster.set(new Date());

    var progressSubscription = null;

    instance.autorun(function() {
        progressSubscription = instance.subscribe('progress', instance.cacheBuster.get());
    });

    instance.unitChartData = new ReactiveVar();
    instance.unitChartData.set(UnitChartDataGenerator.generate());

    instance.unitComplianceStats = new ReactiveVar();
    this.autorun(function() {
        var progress = Progress.find({userId: Meteor.userId()}).fetch();

        if (progress.length > 0) {
            instance.unitComplianceStats.set(AnswerCounter.count(progress[0].form));
            updateUnitChartData(instance);
        }
    });
});

Template.userAnalyticsTab.helpers({
    unitComplianceChartData: function() {
        return Template.instance().unitChartData.get();
    },

    unitCompliancePercentage: function() {
        var stats = Template.instance().unitComplianceStats.get();

        return stats.yes / stats.total * 100 + '%';
    },

    unitVerbalCompliance: function() {
        var stats = Template.instance().unitComplianceStats.get();

        return ComplianceVerbalProgressGenerator.generate(stats.yes / stats.total * 100);
    }
});

function updateUnitChartData(instance) {
    var progress = Progress.find({userId: Meteor.userId()}).fetch();

    if (progress.length > 0) {
        var answers = AnswerCounter.count(progress[0].form);
        var unitChartData = instance.unitChartData.get();

        unitChartData.datasets[0].data[0] = answers.yes;
        unitChartData.datasets[0].data[1] = answers.no;
        unitChartData.datasets[0].data[2] = answers.partially;
    }
}
