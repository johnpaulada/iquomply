Meteor.methods({
    'progress.submit'(data) {
        Reports.insert({
            'progress': data,
            'dateSubmitted': new Date()
        });
    }
});
