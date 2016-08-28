Template.signupBody.onRendered(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

Template.signupBody.events({
    'click #create-user-btn': function(event, instance) {
        var formInput = {
            'firstName': $('.first-name-input').val(),
            'lastName': $('.last-name-input').val(),
            'birthdate': $('.birthdate-input').val(),
            'contact': $('.contact-input').val(),
            'userLevel': $('.user-type-input').val(),
            'unit': $('.unit-input').val()
        }

        var errors = SignupValidator.getErrors(formInput);

        if (errors.length == 0) {
            var username  = UsernameGenerator.generate(formInput.firstName, formInput.lastName, formInput.birthdate);
            var password  = chance.hash({
                length: 10,
                casing: 'upper'
            });

            Accounts.createUser({
                "username": username,
                "password": password,
                "profile": {
                    "firstName": formInput.firstName,
                    "lastName": formInput.lastName,
                    "contact": formInput.contact,
                    "birthdate": formInput.birthdate,
                    "unit": formInput.unit,
                    "newUser": true
                },
                "roles": formInput.userLevel === 'admin' ? ['admin', 'user'] : ['user']
            }, function(error) {
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
                        text: "<p>Username: <strong>" + username + "</strong></p><p>Password: <strong>" + password + "</strong></p>",
                        html: true,
                        type: "success",
                        confirmButtonText: "Okay, proceed!",
                        closeOnConfirm: true
                    }, function() {
                        Router.go('/change-password');
                    });
                }
            });
        } else {
            var errorList = errors.reduce(
                function(previousValue, currentValue) {
                    return previousValue + '<p>' + currentValue + "</p>";
                },
            '');

            swal({
                title: "Oops...",
                text: errorList,
                html: true,
                type: "error"
            });
        }
    }
});
