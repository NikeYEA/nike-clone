angular.module('nike-clone', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      templateUrl: './app/routes/home/home.html',
      controller: 'homeCtrl',
      url: '/home'
    })
    .state('men', {
      templateUrl: './app/routes/men/men.html',
      controller: 'menCtrl',
      url: '/men'
    })
    .state('women', {
      templateUrl: './app/routes/women/women.html',
      controller: 'womenCtrl',
      url: '/women'
    })
    .state('boys', {
      templateUrl: './app/routes/boys/boys.html',
      controller: 'boysCtrl',
      url: '/boys'
    })
    .state('girls', {
      templateUrl: './app/routes/girls/girls.html',
      controller: 'girlsCtrl',
      url: '/girls'
    })
    .state('customize', {
      templateUrl: './app/routes/customize/customize.html',
      controller: 'customizeCtrl',
      url: '/customize'
    })
    .state('login', {
      templateUrl: './app/routes/login/login.html',
      controller: 'userCtrl',
      url: '/user'
    })
    .state('mens-running-shoes', {
      templateUrl: './app/routes/mens-running-shoes/mens-running-shoes.html',
      controller: 'mens-running-shoesCtrl',
      url: '/mens-running-shoes'
    })


    // .state('stuff', {
    //   templateUrl: './app/routes/stuff/stuff.html',
    //   controller: 'stuffCtrl',
    //   url: '/stuff'
    // })



})
