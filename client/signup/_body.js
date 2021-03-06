Template.signupBody.onCreated(function() {
    var instance = this;

    instance.displayUnits = new ReactiveVar();
    instance.displayUnits.set(true);

    instance.subscribe('units');

    instance.units = () => Units.find().fetch();
});

Template.signupBody.helpers({
    units: () => Template.instance().units(),
    displayUnits: () => Template.instance().displayUnits.get()
});

Template.signupBody.onRendered(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

Template.signupBody.events({
    'change #user-type-input': function(event, instance) {
        instance.displayUnits.set(event.target.value === 'user');
    },

    'click #create-user-btn': function(event, instance) {
        var formInput = {
            'firstName': $('.first-name-input').val(),
            'middleName': $('.middle-name-input').val(),
            'lastName': $('.last-name-input').val(),
            'birthdate': $('.birthdate-input').val(),
            'contact': $('.contact-input').val(),
            'userLevel': $('.user-type-input').val(),
            'unit': $('.unit-input').val()
        }

        var errors = SignupValidator.getErrors(formInput);

        if (errors.length == 0) {
            formInput.username  = UsernameGenerator.generate(formInput.firstName, formInput.middleName, formInput.lastName, formInput.birthdate);
            formInput.password  = chance.string({length: 10});

            Meteor.call('user.create', formInput, function(error, result) {
                if (error) {
                    swal({
                        title: "Oops...",
                        text: error.reason,
                        html: true,
                        type: "error"
                    });
                } else {
                    // TODO: Erase input
                    swal({
                        title: "Great Job!",
                        text: "<p>Username: <strong>" + formInput.username + "</strong></p><p>Password: <strong>" + formInput.password + "</strong></p>",
                        html: true,
                        type: "success",
                        confirmButtonText: "Okay, proceed!",
                        closeOnConfirm: true
                    }, function() {
                        Router.go('/admin-dashboard');
                    });
                }
            });
        } else {
            var errorList = errors.reduce(function(previousValue, currentValue) {
                return previousValue + '<p>' + currentValue + "</p>";
            }, '');

            swal({
                title: "Oops...",
                text: errorList,
                html: true,
                type: "error"
            });
        }
    }
});
