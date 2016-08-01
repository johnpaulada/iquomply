Meteor.methods({
    'progress.update'(data) {
        var progress = Progress.find({'userId': this.userId}).fetch();

        if (progress.length === 0) {
            Progress.insert({
                'userId': this.userId,
                'form': data
            });
        } else {
            Progress.update(progress[0]._id, {
                $set: {
                    'form': data
                }
            });
        }
    }
});
