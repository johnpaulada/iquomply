Meteor.publish('progress', function() {
    return Progress.find();
});
