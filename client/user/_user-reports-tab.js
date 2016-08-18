Template.userReportsTab.onCreated(function() {
    var instance = this;

    instance.cacheBuster = new ReactiveVar();
    instance.cacheBuster.set(new Date());

    var reportsSubscription  = null;
    var chaptersSubscription = null;
    var progressSubscription = null;

    instance.autorun(function() {
        formsSubscription    = instance.subscribe('reports', instance.cacheBuster.get());
        chaptersSubscription = instance.subscribe('chapters', instance.cacheBuster.get());
        progressSubscription = instance.subscribe('progress', instance.cacheBuster.get());
    });

    instance.reports = function() {
        return Reports.find({userId: Meteor.userId()}).fetch();
    }
});

Template.userReportsTab.helpers({
    reports: function() {
        return Template.instance().reports();
    },

    user: function() {
        return Meteor.users.find({'_id': this.userId}).fetch()[0];
    },

    actionsHeader: function() {
        return this.accomplished === 'Yes' ? 'Evidence' : 'Actions Needed';
    },

    actionsText: function() {
        var evidence = this.evidence || 'No evidence provided.';
        var actions  = this.actions  || 'No actions to be performed were specified.';

        return this.accomplished === 'Yes' ? evidence : actions;
    }
});
