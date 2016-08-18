Meteor.methods({
    'progress.submit'(data) {
        // Check if empty first

        var progress = Progress.find({'userId': this.userId}).fetch();

        Reports.insert({
            'userId': this.userId,
            'progress': data,
            'dateSubmitted': new Date()
        });

        Progress.remove(progress[0]._id);
    }
});
