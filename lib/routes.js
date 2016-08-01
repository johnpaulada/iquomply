Router.route('/', function () {
    this.render('home');
});

Router.route('/signup', function () {
    this.render('signup');
});

Router.route('/login', function () {
    this.render('login');
});

Router.route('/user-dashboard', {
    name: 'userDashboard.main',
    controller: 'UserDashboardController'
});
