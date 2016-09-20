Meteor.publish('units', function() {
    return Units.find();
});
