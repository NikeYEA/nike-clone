// CONFIG
// ============================================================
angular.module('nike-clone', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './home/home.html',
      controller: 'homeCtrl'
    })
    // MEN STATE
    .state('men', {
      url: '/men',
      templateUrl: './men/men.html',
      controller: 'menCtrl'
    })
    // WOMEN STATE
    .state('women', {
      url: '/women',
      templateUrl: './women/women.html',
      controller: 'womenCtrl'
    })


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
