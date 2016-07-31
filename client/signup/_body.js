Template.signupBody.events({
    'click #create-user-btn': function(event, instance) {
        var firstName = $('.first-name-input').val();
        var lastName  = $('.last-name-input').val();
        var birthdate = $('.birthdate-input').val();
        var contact   = $('.contact-input').val();
        var userLevel = $('.user-level-input').val();

        var username  = UsernameGenerator.generate(firstName, lastName, birthdate);
        var password  = chance.hash({
            length: 10,
            casing: 'upper'
        });

        swal("Great Job!", "Username & Password: " + username + " & " + password, "success");

        Accounts.createUser({
            "username": username,
            "password": password,
            "userLevel": userLevel,
            "firstName": firstName,
            "lastName": lastName,
            "contact": contact,
            "birthdate": birthdate
        }, function(error) {
            if (error) {
                sweetAlert("Oops...", error.reason, "error");
            } else {
                // TODO: Erase input
                swal({
                    title: "Great Job!",
                    text: "<h4>Username</h4><p>" + username + "</p><h4>Password</h4><p>" + password + "</p>",
                    html: true
                });
            }
        });
    }
});
