Template.userBody.onCreated(function() {
    this.subscribe('forms');
    this.subscribe('chapters');

    this.addedChapters = new ReactiveVar();
    this.addedChapters.set([]);

    this.currentChapter = new ReactiveVar();
    this.currentChapter.set(null);

    this.chapters = function() {
        return Chapters.find().fetch();
    }

    this.chapterByCode = function(code) {
        return Chapters.find({'code': code}).fetch()[0];
    }
});

Template.userBody.onRendered(function() {
    $('div.item:first').addClass('active');
    $('ol.carousel-indicators li:first').addClass('active');
});

Template.userBody.helpers({
    questions: function() {
        return [
            {
                question: "Based on the results of screening, is it determined if the needs of the patient match the hospital's mission and resources?"
            },
            {
                question: "Based on the results of screening, is it determined if the needs of the patient match the hospital's mission and resources?"
            },
            {
                question: "Based on the results of screening, is it determined if the needs of the patient match the hospital's mission and resources?"
            }
        ];
    },

    chapters: function() {
        return Template.instance().chapters();
    },

    addedChapters: function() {
        return Template.instance().addedChapters.get();
    },

    currentChapter: function() {
        return Template.instance().addedChapters.get()[Template.instance().currentChapter.get()];
    },

    questionz: function() {
        if (typeof Template.instance().addedChapters.get()[Template.instance().currentChapter.get()] === 'undefined') {
            return [{ question: 'Is this real life?' }]
        }

        return Template.instance().addedChapters.get()[Template.instance().currentChapter.get()].data;
    }

    // ,
    //
    // chapterInList: function(code) {
    //     var i, chaptersLength = Template.instance().addedChapters.get().length;
    //
    //     for (i = 0; i < chaptersLength; i++) {
    //         if (Template.instance().addedChapters.get()[i].code === code) {
    //             return Template.instance().addedChapters.get()[i];
    //         }
    //     }
    // }
});

Template.userBody.events({
    'click #add-chapter-btn': function(event, instance) {
        var chapter = instance.chapterByCode($('#chapter-select').val());

        instance.addedChapters.get().push(chapter);
        instance.addedChapters.set(instance.addedChapters.get());
    },

    'click .added-chapter-item': function(event, instance) {
        event.preventDefault();
        instance.currentChapter.set(parseInt($(event.target).attr('id').replace('chapter-', '')));
    },

    'click #save-btn': function(event, instance) {
        $('.carousel-inner .item').each((index, element) => {
            var accomplished = $(element).find('li.active a').attr('class');
            var evidence     = $(element).find('.evidence').val();
            var actions      = $(element).find('.actions').val();

            instance.addedChapters.get()[instance.currentChapter.get()].data[index].accomplished = accomplished;
            instance.addedChapters.get()[instance.currentChapter.get()].data[index].evidence     = evidence;
            instance.addedChapters.get()[instance.currentChapter.get()].data[index].actions      = actions;

            console.log(instance.addedChapters.get()[instance.currentChapter.get()].data[index]);
        });

        instance.addedChapters.set(instance.addedChapters.get());
    }
});
