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

Router.route('/user-dashboard/reports', {
    name: 'userDashboard.reports',
    controller: 'UserReportsController'
});

Router.route('/user-dashboard/my-performance', {
    name: 'userDashboard.analytics',
    controller: 'UserAnalyticsController'
});

Router.route('/chart', function() {
    this.render('chart');
});
