Template.chapterSelector.onCreated(function() {
    var instance = this;

    instance.chapters = function() {
        var user = Meteor.users.find({'_id': Meteor.userId()}).fetch();

        return user.length > 0 ? user[0].profile.chapters : [];
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
    }
});
