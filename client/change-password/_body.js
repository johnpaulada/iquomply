Template.changePasswordBody.events({
    'click #change-btn'(event, instance) {
        var oldPw = $('.old-input').val();
        var newPw = $('.new-input').val();

        Accounts.changePassword(oldPw, newPw, function(error) {
            if (error) {
                swal('Ouch!', error.message, 'error');
            } else {
                var user = Meteor.users.findOne(Meteor.userId());

                user.profile.newUser = false;

                Meteor.call('user.update', user.profile, function(error1) {
                    if (error1) {
                        swal('Ouch!', error1.message, 'error');
                    } else {
                        swal('Nice!', 'Successfully changed the password!', 'success');

                        if (Roles.userIsInRole(Meteor.userId(), ['admin', 'super-admin'])) {
                            Router.go('/admin-dashboard');
                        } else {
                            Router.go('/user-dashboard/chapter-selector');
                        }
                    }
                });
            }
        });
    }
});
