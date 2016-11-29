angular.module('nike-clone', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
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

}])

angular.module('nike-clone').service('mainService', ["$http", function($http) {
  
}])

angular.module('nike-clone').directive('footerDir', function() {
  return {
    restrict: 'AE',
    templateUrl: './app/directives/footer/footer.html',
    controller: ["$scope", function($scope) {

    }]
  }
})

angular.module('nike-clone').directive('headerDir', function() {
  return {
    restrict: 'E',
    templateUrl: './app/directives/header/header.html',
    controller: ["$scope", function($scope) {
      
    }]
  }
})

angular.module('nike-clone').controller('boysCtrl', ["$scope", function($scope) {

}])

angular.module('nike-clone').controller('customizeCtrl', ["$scope", function($scope) {
  
}])

angular.module('nike-clone').controller('girlsCtrl', ["$scope", function($scope) {

}])

angular.module('nike-clone').controller('homeCtrl', ["$scope", function($scope) {

}])

angular.module('nike-clone').controller('menCtrl', ["$scope", function($scope) {
  
}])

angular.module('nike-clone').controller('womenCtrl', ["$scope", function($scope) {

}])
