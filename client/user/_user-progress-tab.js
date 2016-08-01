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
            return [{ question: 'Is this real life?' }];
        }

        return Template.instance().currentProgress()[0].form[Template.instance().currentChapter.get()].data;
    },

    accomplishedClass: function(accomplished, value) {
        if (accomplished === value) {
            return 'active';
        }
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

    'click .added-chapter-item': function(event, instance) {
        event.preventDefault();
        instance.currentChapter.set(parseInt($(event.target).attr('id').replace('chapter-', '')));
    },

    'click #save-btn': function(event, instance) {
        var form = instance.currentProgress()[0].form;
        var chapter = form[instance.currentChapter.get()];

        $('.carousel-inner .item').each((index, element) => {
            var accomplished = $(element).find('li.active a').attr('class');
            var evidence     = $(element).find('.evidence').val();
            var actions      = $(element).find('.actions').val();

            chapter.data[index].accomplished = accomplished;
            chapter.data[index].evidence     = evidence;
            chapter.data[index].actions      = actions;

            console.log(evidence);
        });

        form[instance.currentChapter.get()] = chapter;

        Meteor.call('progress.update', form);
    }
});
