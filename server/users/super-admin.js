(function() {
    if (Meteor.users.find().fetch().length == 0) {
        Accounts.createUser({
            "username": 'iquomply',
            "password": '123qweasdzxc',
            "profile": {
                "firstName": 'iQuomply',
                "lastName": 'Admin',
                "contact": '09358369332',
                "birthdate": '1994-10-07',
                "chapters": Chapters.find().fetch()
            },
            "roles": ['super-admin']
        });
    }
})();
