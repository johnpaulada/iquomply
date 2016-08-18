Template.userProgressTab.onCreated(function() {
    var instance = this;

    instance.cacheBuster = new ReactiveVar();
    instance.cacheBuster.set(new Date());

    var reportsSubscription  = null;
    var chaptersSubscription = null;
    var progressSubscription = null;

    instance.autorun(function() {
        formsSubscription    = instance.subscribe('reports', instance.cacheBuster.get());
        chaptersSubscription = instance.subscribe('chapters', instance.cacheBuster.get());
        progressSubscription = instance.subscribe('progress', instance.cacheBuster.get());
    });

    instance.currentProgress = function() {
        return Progress.find({userId: Meteor.userId()}).fetch();
    }

    instance.currentChapter = new ReactiveVar();
    instance.currentChapter.set(null);

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
        console.log(Template.instance().currentProgress());

        return Template.instance().currentProgress().length === 0 ? [] : Template.instance().currentProgress()[0].form;
    },

    currentChapter: function() {
        if (Template.instance().currentProgress().length === 0) {
            return {};
        }

        return Template.instance().currentProgress()[0].form[Template.instance().currentChapter.get()];
    },

    questionz: function() {
        var progress = Progress.find({userId: Meteor.userId()}).fetch();
        var chapter  = Template.instance().currentChapter.get();

        if (progress.length > 0) {
            return progress[0].form[chapter].data;
        }

        return [];
    },

    accomplishedClass: function(accomplished, value) {
        if (accomplished.toLowerCase() === value.toLowerCase()) {
            return 'checked';
        }
    },

    equalString: function(actual, expected) {
        return actual.toLowerCase() === expected.toLowerCase();
    },

    or: function(cond1, cond2) {
        return cond1 || cond2;
    },

    selectedBox: function(selected) {
        return selected ? 'checked' : '';
    },

    selectedOpacity: function(selected) {
        return selected ? '' : ' disabled';
    },

    selectedInvisible: function(selected) {
        return selected ? '' : ' invisible';
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

        if (instance.currentChapter.get() == null) {
            instance.currentChapter.set(index);
        } else {
            instance.currentChapter.set(null);
        }
    },

    'click button.remove-chapter': function(event, instance) {
        var form  = instance.currentProgress()[0].form;
        var index = $(event.target).parent().parent().siblings('td.id-col').html();

        form.splice(index, 1);

        Meteor.call('progress.update', form);
    },

    'click #save-btn': function(event, instance) {
        saveChapter(instance);
        swal('Nice!', 'Successfully saved your progress!', 'success');
    },

    'click #submit-btn': function(event, instance) {
        var form = Progress.find({userId: Meteor.userId()}).fetch()[0].form;

        Meteor.call('progress.submit', form, function() {
            instance.cacheBuster.set(new Date());
            swal('Nice!', 'Successfully submitted a report!', 'success');
        });
    },

    'change input.selector': function(event, instance) {
        saveChapter(instance);
    },

    'change input.accomplished': function(event, instance) {
        saveChapter(instance);
        swal('Nice!', 'Successfully saved your progress!', 'success');
    }
});

function saveChapter(instance) {
    var form = Progress.find({userId: Meteor.userId()}).fetch()[0].form;
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
        instance.cacheBuster.set(new Date());
    });
}
