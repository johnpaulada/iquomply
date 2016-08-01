Meteor.publish('forms', function() {
    return Forms.find();
});
