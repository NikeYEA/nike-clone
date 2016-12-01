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
    .state('login', {
      templateUrl: './app/routes/login/login.html',
      controller: 'userCtrl',
      url: '/user'
    })
    .state('stuff', {
      templateUrl: './app/routes/stuff/stuff.html',
      controller: 'stuffCtrl',
      url: '/stuff'
    })



}])

angular.module('nike-clone').service('mainService', ["$http", function($http) {
  this.postUsers = function(fname,email) {
    return $http({
      method: 'POST',
      url: '/api/user',
      data: {
        name: fname,
        email: email,

  }
    });
  };

  this.getUsers = function() {
    return $http({
      method: 'GET',
      url: '/api/user'
    });
  };

  this.getUserOrder = function(id) {
    return $http({
        method: 'GET',
        url: '/api/order/' + id
      })
      .catch(function(err) {
        console.log(err);

      });
  };

  this.getProducts = function() {
    return $http({
      method: "GET",
      url: "/api/products"
    });
  };

  this.addToCart = function(id, product_id, qty) {
    return $http({
      method: 'POST',
      url: '/api/add/item/cart/' + id,
      data: {
        id: product_id,
        qty: qty
      }
    });
  };

  this.updateProductQty = function(id, qty) {
    return $http({
      method: 'PUT',
      url: "/api/update/qty/" + id,
      data: {
        qty: qty
      }
    });
  };

  this.removeFromCart = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/delete/item/cart/' + id
    });
  };

  this.placeOrder = function(id, order_id) {
    return $http({
      method: 'PUT',
      url: '/api/order/complete/' + order_id + "/" + id
    });
  };

  this.getProductById = function(id) {
    return $http({
      method:' GET',
      url: '/api/products/' + id
    }).then(function(response){
      return response.data;
    })
  }

}]);

angular.module('nike-clone').directive('headerDir', function() {
  return {
    restrict: 'E',
    templateUrl: './app/directives/header/header.html',
    controller: ["$scope", function($scope) {
      
    }]
  }
})

angular.module('nike-clone').directive('footerDir', function() {
  return {
    restrict: 'AE',
    templateUrl: './app/directives/footer/footer.html',
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

angular.module("nike-clone")
	.controller("userCtrl", ["$scope", "mainService", function($scope, mainService) {

		$scope.getUsers = function() {
			mainService.getUsers()
				.then(function(response) {
					$scope.users = response.data;
					console.log(response);

				});
		};

		$scope.postUsers = function(fname,email){
			mainService.postUsers(fname,email).then(function(response){
				console.log('this is the postuser response: ',response);
			})
		}
		$scope.getUsers();

		
	}]);

angular.module('nike-clone').controller('menCtrl', ["$scope", function($scope) {
  
}])

angular.module('nike-clone').controller('stuffCtrl', ["$scope", function($scope) {
  $scope.test = "test";
}])

angular.module('nike-clone').controller('womenCtrl', ["$scope", function($scope) {

}])
