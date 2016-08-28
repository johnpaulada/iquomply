Template.editProfileBody.onCreated(function() {
    var instance = this;

    instance.user = function() {
        return Meteor.users.findOne(Meteor.userId());
    }
});

Template.editProfileBody.onRendered(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

Template.editProfileBody.helpers({
    user() {
        return Template.instance().user().profile;
    }
});

Template.editProfileBody.events({
    'click #edit-user-btn': function(event, instance) {
        var formInput = {
            'firstName': $('.first-name-input').val(),
            'lastName': $('.last-name-input').val(),
            'birthdate': $('.birthdate-input').val(),
            'contact': $('.contact-input').val(),
            'unit': $('.unit-input').val()
        }

        var errors = SignupValidator.getErrors(formInput);

        if (errors.length == 0) {
            var profile = {
                "firstName": formInput.firstName,
                "lastName": formInput.lastName,
                "contact": formInput.contact,
                "birthdate": formInput.birthdate,
                "unit": formInput.unit,
                "newUser": false
            };

            Meteor.call('user.update', profile, function(error) {
                if (error) {
                    swal({
                        title: "Oops...",
                        text: error.reason,
                        html: true,
                        type: "error"
                    });
                } else {
                    swal('Nice Job!', 'Successfully updated your profile!');
                    // TODO: Move to profile page
                    Router.go('/user-dashboard');
                }
            });
        }
    }
});
