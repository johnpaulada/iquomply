Meteor.methods({
    'user.update'(profile) {
        var user = Meteor.users.findOne(Meteor.userId());

        Meteor.users.update(Meteor.userId(), {
            $set: {
                'profile': profile
            }
        });
    }
});
