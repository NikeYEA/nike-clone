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
      url: '/individual-shoe/:id'
    })

    .state('boys-running-shoes', {
      templateUrl: './app/routes/boys-running/boysRunning.html',
      controller: 'boysRunningCtrl',
      url: '/boys-running-shoes'
    })

    .state('boys-soccer', {
      templateUrl: './app/routes/boys-soccer/boys-soccer.html',
      controller: 'boys-soccerCtrl',
      url: '/boys-soccer'
    })

    .state('boys-basketball', {
      templateUrl: './app/routes/boys-basketball/boys-basketball.html',
      controller: 'boys-basketballCtrl',
      url: '/boys-basketball'
    })

    .state('boys-lifestyle', {
      templateUrl: './app/routes/boys-lifestyle/boys-lifestyle.html',
      controller: 'boys-lifestyleCtrl',
      url: '/boys-lifestyle'
    })

    .state('boys-jordan', {
      templateUrl: './app/routes/boys-jordan/boys-jordan.html',
      controller: 'boys-jordanCtrl',
      url: '/boys-jordan'
    })

    .state('girls-basketball', {
      templateUrl: './app/routes/girls-basketball/girls-basketball.html',
      controller: 'girls-basketballCtrl',
      url: '/girls-basketball'
    })

    .state('girls-lifestyle', {
      templateUrl: './app/routes/girls-lifestyle/girls-lifestyle.html',
      controller: 'girls-lifestyleCtrl',
      url: '/girls-lifestyle'
    })
    .state('girls-soccer', {
      templateUrl: './app/routes/girls-soccer/girls-soccer.html',
      controller: 'girls-soccerCtrl',
      url: '/girls-soccer'
    })

    .state('girls-jordan', {
      templateUrl: './app/routes/girls-jordan/girls-jordan.html',
      controller: 'girls-jordanCtrl',
      url: '/girls-jordan'
    })

    .state('girls-running', {
      templateUrl: './app/routes/girls-running/girls-running.html',
      controller: 'girls-runningCtrl',
      url: '/girls-running'
    })

    .state('womens-Lifestyle', {
      url: '/womens-lifestyle',
      templateUrl: './app/routes/womens-lifestyle/womenLifestyle.html',
      controller: 'womenLifestyleCtrl'
    })

    .state('womens-running', {
      url: '/womens-running',
      templateUrl: './app/routes/womensRunning/womensRunning.html',
      controller: 'womensRunningCtrl'
    })

    .state('womens-training', {
      templateUrl: './app/routes/womens-training/womens-training.html',
      controller: 'womens-trainingCtrl',
      url: '/womens-training'
    })

    .state('mens-basketball', {
      templateUrl: './app/routes/mens-basketball/mens-basketball.html',
      controller: 'mens-basketballCtrl',
      url: '/mens-basketball'
    })

    .state('mens-soccer', {
      templateUrl: './app/routes/mens-soccer/mens-soccer.html',
      controller: 'mens-soccerCtrl',
      url: '/mens-soccer'
    })

    .state('mens-training', {
      templateUrl: './app/routes/mens-training-gym/mens-training-gym.html',
      controller: 'mens-training-gymCtrl',
      url: '/mens-training-gym'
    })

    .state('mens-sportswear', {
      templateUrl: './app/routes/mens-sportswear/mens-sportswear.html',
      controller: 'mens-sportswearCtrl',
      url: '/mens-sportswear'
    })

    .state('mens-jordan', {
      templateUrl: './app/routes/mens-jordan/mens-jordan.html',
      controller: 'mens-jordanCtrl',
      url: '/mens-jordan'
    })

    .state('payments', {
      templateUrl: './app/routes/payments/payments.html',
      controller: 'paymentsCtrl',
      url: '/payments'
    })

    .state('cart', {
      templateUrl: './app/routes/cart/cart.html',
      controller: 'cartCtrl',
      url: '/cart',
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
            })
        },
        order: function(mainService) {
          return mainService.getUserOrder().then(function(response) {
            return response.data
          });
        }
      }
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
            console.log('RESOLVE',response);
            if (!response.data.email) {
              return $state.go('login');
            }

            return response.data
          }).catch(function(err) {
            $state.go('login');
          })
      },
      order: function(mainService) {
        return mainService.getUserOrder().then(function(response) {
          return response.data
        });
      }
    }
  })
});
