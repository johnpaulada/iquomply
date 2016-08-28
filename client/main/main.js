Accounts.onLogin(function() {
    var user = Meteor.users.findOne(Meteor.userId());

    console.log('On Login');
    console.log(user);
    console.log('Is New User: ' + user.profile.newUser);

    // Go to change password page if new user
    if (user.profile.newUser) {
        Router.go('/change-password');
    }
});
