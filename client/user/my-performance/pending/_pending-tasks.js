Template.pendingTasks.onCreated(function() {
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

Template.pendingTasks.helpers({
    progress() {
        return Template.instance().currentProgress();
    },

    hasPending() {
        var pending = _.some(this.data, function(val) {
            if (val.selected) {
                return val.accomplished !== 'Yes';
            }

            return false;
        });

        return pending;
    },

    hasNo() {
        var pending = _.some(this.data, function(val) {
            if (val.selected) {
                return val.accomplished === 'No';
            }

            return false;
        });

        return pending;
    },

    hasPartially() {
        var pending = _.some(this.data, function(val) {
            if (val.selected) {
                return val.accomplished === 'Partially';
            }

            return false;
        });

        return pending;
    },

    hasPendingClass() {
        var pendingClass =  _.some(this.data, function(val) {
            return val.accomplished !== 'Yes';
        }) ? '' : 'card-plain';

        return pendingClass;
    },

    isPending() {
        return this.accomplished !== 'Yes';
    },

    isNo() {
        return this.accomplished === 'No';
    },

    isPartially() {
        return this.accomplished === 'Partially';
    }
});
