Meteor.methods({
    'user.create'(data) {
        Accounts.createUser({
            "username": data.username,
            "password": data.password,
            "profile": {
                "firstName": data.firstName,
                "lastName": data.lastName,
                "contact": data.contact,
                "birthdate": data.birthdate,
                "unit": data.unit,
                "newUser": true
            },
            "roles": data.userLevel === 'admin' ? ['admin', 'user'] : ['user']
        });
    }
});
