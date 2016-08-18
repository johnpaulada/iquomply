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
});

Template.userReportsTab.helpers({
    reports: function() {
        console.log(Reports.find({userId: Meteor.userId()}).fetch());
        return Reports.find({userId: Meteor.userId()}).fetch();
    }
});
