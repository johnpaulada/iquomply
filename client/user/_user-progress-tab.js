Template.userProgressTab.onCreated(function() {
    this.subscribe('forms');
    this.subscribe('chapters');
    this.subscribe('progress');

    this.currentProgress = function() {
        return Progress.find({userId: Meteor.userId()}).fetch();
    }

    this.currentChapter = new ReactiveVar();
    this.currentChapter.set(null);

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
    //
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
            swal('Nice!', 'Successfully saved your progress!', 'success');
        });
    }
});
