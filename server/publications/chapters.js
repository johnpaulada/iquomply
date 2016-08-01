Meteor.publish('chapters', function() {
    return Chapters.find();
});
