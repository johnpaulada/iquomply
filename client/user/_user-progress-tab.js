Template.userProgressTab.onCreated(function() {
    var instance = this;

    instance.subscribe('forms');
    instance.subscribe('chapters');
    var progressSubscription = instance.subscribe('progress');

    instance.canRun = {
        'unitChart': true
    }

    instance.currentProgress = function() {
        return Progress.find({userId: Meteor.userId()}).fetch();
    }

    instance.currentChapter = new ReactiveVar();
    instance.currentChapter.set(null);

    instance.unitChartData = new ReactiveVar();
    instance.unitChartData.set({
        labels: [
            "Yes",
            "No",
            "Partially"
        ],
        datasets: [{
            data: [2, 2, 0],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    });

    this.autorun(function() {
        if (progressSubscription.ready()) {
            if (instance.canRun.unitChart) {
                var answers = AnswerCounter.count(Progress.find({userId: Meteor.userId()}).fetch()[0].form);
                var unitChartData = instance.unitChartData.get();

                unitChartData.datasets[0].data[0] = answers.yes;
                unitChartData.datasets[0].data[1] = answers.no;
                unitChartData.datasets[0].data[2] = answers.partially;

                instance.canRun.unitChart = false;
            }
        }
    });

    this.chapters = function() {
        return Chapters.find().fetch();
    }

    this.chapterByCode = function(code) {
        return Chapters.find({'code': code}).fetch()[0];
    }
});

Template.userProgressTab.onRendered(function() {
    $('div.item:first').addClass('active');
    $('ol.carousel-indicators li:first').addClass('active');
});

Template.userProgressTab.helpers({
    chapters: function() {
        return Template.instance().chapters();
    },

    currentProgress: function() {
        return Template.instance().currentProgress().length === 0 ? [] : Template.instance().currentProgress()[0].form;
    },

    currentChapter: function() {
        if (Template.instance().currentProgress().length === 0) {
            return {};
        }

        return Template.instance().currentProgress()[0].form[Template.instance().currentChapter.get()];
    },

    questionz: function() {
        if (Template.instance().currentProgress().length === 0 || Template.instance().currentChapter.get() === null) {
            return [];
        }

        return Template.instance().currentProgress()[0].form[Template.instance().currentChapter.get()].data;
    },

    accomplishedClass: function(accomplished, value) {
        if (accomplished.toLowerCase() === value.toLowerCase()) {
            return 'checked';
        }
    },

    selectedBox: function(selected) {
        return selected ? 'checked' : '';
    },

    selectedOpacity: function(selected) {
        return selected ? '' : ' disabled';
    },

    selectedInvisible: function(selected) {
        return selected ? '' : ' invisible';
    },

    unitComplianceChartData: function() {
        return Template.instance().unitChartData.get();
    }
});

Template.userProgressTab.events({
    'click #add-chapter-btn': function(event, instance) {
        var chapter = instance.chapterByCode($('#chapter-select').val());

        if (instance.currentProgress().length === 0) {
            Meteor.call('progress.update', [chapter]);
        } else {
            var form = instance.currentProgress()[0].form;
            form.push(chapter);
            Meteor.call('progress.update', form);
        }
    },

    'click button.edit-chapter': function(event, instance) {
        var index = $(event.target).parent().parent().siblings('td.id-col').html();
        instance.currentChapter.set(index);
    },

    'click button.remove-chapter': function(event, instance) {
        var form  = instance.currentProgress()[0].form;
        var index = $(event.target).parent().parent().siblings('td.id-col').html();

        form.splice(index, 1);

        Meteor.call('progress.update', form);
    },

    'click #save-btn': function(event, instance) {
        var form = instance.currentProgress()[0].form;
        var chapter = form[instance.currentChapter.get()];

        $('.item').each((index, element) => {
            var accomplished = $(element).find('input[type="radio"]:checked').val();
            var selected     = $(element).find('input.selector').is(':checked');
            var evidence     = $(element).find('.evidence').val();
            var actions      = $(element).find('.actions').val();

            chapter.data[index].accomplished = accomplished;
            chapter.data[index].selected     = selected;
            chapter.data[index].evidence     = evidence;
            chapter.data[index].actions      = actions;
        });

        form[instance.currentChapter.get()] = chapter;

        Meteor.call('progress.update', form, function() {
            updateUnitChartData(instance);
            swal('Nice!', 'Successfully saved your progress!', 'success');
        });
    }
});

function updateUnitChartData(instance) {
    var answers = AnswerCounter.count(instance.currentProgress()[0].form);
    var unitChartData = instance.unitChartData.get();

    unitChartData.datasets[0].data[0] = answers.yes;
    unitChartData.datasets[0].data[1] = answers.no;
    unitChartData.datasets[0].data[2] = answers.partially;
}
