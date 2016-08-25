Meteor.methods({
    'user.update.chapters'(chapters) {
        Meteor.users.update(Meteor.userId(), {
            $set: { 'profile.chapters': chapters }
        })
    }
});
