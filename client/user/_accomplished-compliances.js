Template.accomplishedCompliances.onCreated(function() {
    var instance = this;

    instance.cacheBuster = new ReactiveVar();
    instance.cacheBuster.set(new Date());

    var progressSubscription = null;

    instance.autorun(function() {
        progressSubscription = instance.subscribe('progress', instance.cacheBuster.get());
    });

    instance.currentProgress = function() {
        return Progress.findOne({userId: Meteor.userId()}).form;
    }
});

Template.accomplishedCompliances.helpers({
    progress() {
        console.log(Template.instance().currentProgress());

        return Template.instance().currentProgress();
    }
});
