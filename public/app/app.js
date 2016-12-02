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

    .state('mens-running-shoes', {
      templateUrl: './app/routes/mens-running-shoes/mens-running-shoes.html',
      controller: 'mens-running-shoesCtrl',
      url: '/mens-running-shoes'
    })
    .state('individual-shoe', {
      templateUrl: './app/routes/individual-shoe/individual-shoe.html',
      controller: 'individual-shoeCtrl',
      url: '/individual-shoe'
    })
    .state('login', {
    url: '/login',
    templateUrl: './app/routes/login/login.html',
    controller: 'loginCtrl'
  })
    .state('profile', {
    url: '/profile',
    templateUrl: './app/routes/profile/profile.html',
    controller: 'profileCtrl',
    resolve: {
      user: function(authService, $state) {
        return authService.getCurrentUser()
          .then(function(response) {
            if (!response.data.email) {
              return $state.go('login');
            }
            return response.data
          }).catch(function(err) {
            $state.go('login');
          });
      }
    }
  });



    // .state('stuff', {
    //   templateUrl: './app/routes/stuff/stuff.html',
    //   controller: 'stuffCtrl',
    //   url: '/stuff'
    // })



})


function findMe(){

}
