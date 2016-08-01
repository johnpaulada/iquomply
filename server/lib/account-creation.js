Accounts.onCreateUser(function(options, user) {
    var errors = SignupValidator.getErrors(options);

    if (errors.length > 0) {
        throw new Meteor.Error('invalid-input', errors.reduce(
            function(previousValue, currentValue) {
                return previousValue + '<p>' + currentValue + "</p>";
            },
        ''));
    }

   user.profile = options.profile || {};

   user.profile.firstName = options.firstName;
   user.profile.lastName  = options.lastName;
   user.profile.contact   = options.contact;
   user.profile.birthdate = options.birthdate;

   user.roles = options.userLevel === 'Admin' ? ['User', 'Admin'] : ['User'];

   return user;
});
