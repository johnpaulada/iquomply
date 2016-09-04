Template.userUserComplianceStats.onCreated(function() {
    var instance = this;

    instance.cacheBuster = new ReactiveVar();
    instance.cacheBuster.set(new Date());

    var progressSubscription = null;

    instance.autorun(function() {
        progressSubscription = instance.subscribe('progress', instance.cacheBuster.get());
    });

    instance.userChartData = new ReactiveVar();
    instance.userChartData.set(UserChartDataGenerator.generate());

    instance.userComplianceStats = new ReactiveVar();
    this.autorun(function() {
        var progress = Progress.find({userId: Meteor.userId()}).fetch();

        if (progress.length > 0) {
            instance.userComplianceStats.set(AnswerCounter.count(progress[0].form));
            updateUserChartData(instance);
        }
    });
});

Template.userUserComplianceStats.helpers({
    complianceStats: function() {
        return Template.instance().userComplianceStats.get();
    },

    userComplianceChartData: function() {
        return Template.instance().userChartData.get();
    },

    userCompliancePercentage: function() {
        var stats = Template.instance().userComplianceStats.get();

        return stats.yes / stats.total * 100 + '%';
    },

    userVerbalCompliance: function() {
        var stats = Template.instance().userComplianceStats.get();

        return ComplianceVerbalProgressGenerator.generate(stats.yes / stats.total * 100);
    }
});

function updateUserChartData(instance) {
    var progress = Progress.find({userId: Meteor.userId()}).fetch();

    if (progress.length > 0) {
        var answers = AnswerCounter.count(progress[0].form);
        var userChartData = instance.userChartData.get();

        userChartData.datasets[0].data[0] = answers.yes;
        userChartData.datasets[0].data[1] = answers.no + answers.partially;
    }
}
