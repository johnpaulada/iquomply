Template.chapterSelector.onCreated(function() {
    var instance = this;

    instance.subscribe('progress');

    instance.chapters = function() {
        var user = Meteor.users.find({'_id': Meteor.userId()}).fetch();

        return user.length > 0 ? user[0].profile.chapters : [];
    }

    instance.progress = function() {
        return Progress.find({'userId': Meteor.userId()}).fetch();
    }
});

Template.chapterSelector.helpers({
    chapters() {
        return Template.instance().chapters();
    },

    selectedBox: function(selected) {
        return selected ? 'checked' : '';
    },

    selectedOpacity: function(selected) {
        return selected ? '' : 'disabled';
    },
});

Template.chapterSelector.events({
    'change input.chapter'(event, instance) {
        var index    = parseInt(event.target.name.replace('chapter-', ''));
        var chapters = instance.chapters();

        chapters[index].selected = event.target.checked;

        Meteor.call('user.update.chapters', chapters, function(error) {
            if (error) {
                swal('Ouch!', error.message, 'error');
            }
        });
    },

    'change input.question'(event, instance) {
        var chapterIndex = parseInt(event.target.parentElement.parentElement.previousElementSibling.children[0].name.replace('chapter-', ''));
        var index        = parseInt(event.target.name.replace('question-', ''));
        var chapters     = instance.chapters();

        chapters[chapterIndex].data[index].selected = event.target.checked;

        Meteor.call('user.update.chapters', chapters, function(error) {
            if (error) {
                swal('Ouch!', error.message, 'error');
            }
        });
    },

    'click #save-btn'(event, instance) {
        var progress = instance.progress();

        if (progress.length > 0) {
            var chapters = instance.chapters();

            chapters.forEach(function(chapter, chapterIndex) {
                progress[0].form[chapterIndex].selected = chapter.selected;
                chapter.data.forEach(function(question, questionIndex) {
                    progress[0].form[chapterIndex].data[questionIndex].selected = question.selected;
                });
            });

            Meteor.call('progress.update', progress[0].form, function(error) {
                if (error) {
                    swal('Ouch!', error.message, 'error');
                } else {
                    swal('Nice Job!', "Updated successfully!", 'success');
                }
            });
        } else {
            swal('Nice Job!', "Updated successfully!", 'success');
        }
    }
});
