Accounts.onCreateUser(function(options, user) {
    // var errors = SignupValidator.getErrors(options);
    //
    // if (errors.length > 0) {
    //     throw new Meteor.Error('invalid-input', errors.reduce(
    //         function(previousValue, currentValue) {
    //             return previousValue + '<p>' + currentValue + "</p>";
    //         },
    //     ''));
    // }

   user.profile = options.profile || {};

   user.profile.firstName = options.profile.firstName;
   user.profile.lastName  = options.profile.lastName;
   user.profile.contact   = options.profile.contact;
   user.profile.birthdate = options.profile.birthdate;
   user.profile.chapters  = Chapters.find().fetch();

   user.roles = options.roles;

   return user;
});
