Template.adminReportsDetails.onCreated(function() {
    var instance = this;

    instance.details = new ReactiveVar();
});

Template.adminReportsDetails.helpers({
    details() {
        return Template.instance().details.get();
    }
});

Template.adminReportsDetails.onRendered(function() {
    Template.instance().details.set(this.data.details);
});
