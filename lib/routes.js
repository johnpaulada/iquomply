Router.route('/', function () {
    this.render('home');
});

Router.route('/create-account', {
    name: 'signup',
    controller: 'CreateAccountController'
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

Router.route('/user-dashboard/chapter-selector', {
    name: 'userDashboard.chapterSelector',
    controller: 'ChapterSelectorController'
});

Router.route('/admin-dashboard', {
    name: 'adminDashboard.main',
    controller: 'AdminDashboardController'
});

Router.route('/chart', function() {
    this.render('chart');
});
