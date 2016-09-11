Template.userUnitComplianceStats.onCreated(function() {
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

Template.userUnitComplianceStats.helpers({
    complianceStats: function() {
        return Template.instance().unitComplianceStats.get();
    },

    unitComplianceChartData: function() {
        return Template.instance().unitChartData.get();
    },

    unitCompliancePercentage: function() {
        var stats   = Template.instance().unitComplianceStats.get();
        var percent = stats.yes / stats.total * 100;


        return RoundOffer.roundOffToPlace(percent, 2) + '%';
    },

    unitVerbalCompliance: function() {
        var stats = Template.instance().unitComplianceStats.get();

        return ComplianceVerbalProgressGenerator.generate(stats.yes / stats.total * 100);
    },

    unit: function() {
        return Meteor.users.findOne(Meteor.userId()).profile.unit;
    },

    chartClickHandler() {
        return handleChartClick;
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

function handleChartClick(model) {
    if (model.label === 'Yes') {
        $('li.active').removeClass('active');
        $('a[href="#accomplished"]').parent().addClass('active');
        $('div.active').removeClass('active');
        $('div#accomplished').addClass('active');
    } else {
        $('li.active').removeClass('active');
        $('a[href="#pending"]').parent().addClass('active');
        $('div.active').removeClass('active');
        $('div#pending').addClass('active');
    }
}
