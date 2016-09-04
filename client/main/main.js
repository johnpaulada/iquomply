Accounts.onLogin(function() {
    var user = Meteor.users.findOne(Meteor.userId());

    // Go to change password page if new user
    if (user.profile.newUser) {
        Router.go('/change-password');
    }
});
