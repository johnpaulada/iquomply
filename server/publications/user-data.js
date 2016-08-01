Meteor.publish('userData', function() {
    var currentUser = this.userId;

    if (currentUser) {
        return Meteor.users.find({
            _id: currentUser
        }, {
            fields: {
                "username": 1,
                "profile": 1,
                "roles": 1
            }
        });
    } else {
        return this.ready();
    }
});
