Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};

   user.profile.firstName = options.firstName;
   user.profile.lastName  = options.lastName;
   user.profile.contact   = options.contact;
   user.profile.birthdate = options.birthdate;

   console.log(JSON.stringify(user));

   return user;
});
