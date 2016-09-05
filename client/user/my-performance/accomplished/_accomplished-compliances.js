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
        return Template.instance().currentProgress();
    },

    hasAccomplished() {
        return _.some(this.data, function(val) {
            if (val.selected) {
                return val.accomplished === 'Yes';
            }

            return false;
        });
    },

    hasAccomplishedClass() {
        return _.some(this.data, function(val) {
            return val.accomplished === 'Yes';
        }) ? '' : 'card-plain';
    },

    isAccomplished() {
        return this.accomplished === 'Yes';
    }
});
