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
    url: '/login',
    templateUrl: './app/routes/login/login.html',
    controller: 'loginCtrl'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: './app/routes/profile/profile.html',
    controller: 'profileCtrl',
    resolve: {
      user: ["authService", "$state", function(authService, $state) {
        return authService.getCurrentUser()
          .then(function(response) {
            if (!response.data.email) {
              return $state.go('login');
            }
            return response.data
          }).catch(function(err) {
            $state.go('login');
          });
      }]
    }
  });



}])


function findMe(){

}

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

// INITILIZE SERVICE
// ============================================================
angular.module("app").service("authService", ["$http", function($http) {

  // AUTH FUNCTIONS
  // ============================================================
  this.login = function(user) {
    return $http({
      method: 'post',
      url: '/api/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };
  this.logout = function() {
    return $http({
      method: 'get',
      url: '/api/logout'
    }).then(function(response) {
      return response;
    });
  };
  this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: '/api/me'
    }).then(function(response) {
      return response;
    });
  };
  this.register = function(user) {
    return $http({
      method: 'POST',
      url: '/api/register',
      data: user
    }).then(function(response) {
      return response;
    });
  };
  // this.editUser = function(id, user) {
  //   return $http({
  //     method: 'PUT',
  //     url: "/api/user/current",
  //     data: user
  //   }).then(function(response) {
  //     return response;
  //   });
  // };

  // OTHER FUNCTIONS
  // ============================================================


}]);

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

// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("loginCtrl", ["$scope", "authService", "$state", "mainService", function($scope, authService, $state, mainService) {

  // VARIABLES
  // ============================================================
  $scope.test= "login";

  // FUNCTIONS
  // ============================================================
  $scope.login = function(user) {
    authService.login(user)
    .then(function(response) {
      if (!response.data) {
        $scope.user.password = "";
        return alert('user could not be logged in');
      }
      $state.go('profile')
    }).catch(function(err) {
      $scope.user.password = "";
      alert('user could not be logged in');
    });
  };

  $scope.register = function(newUser) {
    authService.register(newUser)
    .then(function(response) {
      if (response.data !== "User created successfully!") {
        return alert("Could not register user");
      }
      alert(response.data);
    }).catch(function(err) {
      return alert("Could not register user");
    });
  };

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

// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("profileCtrl", ["$scope", "authService", "user", "$state", function($scope, authService, user, $state) {

  // VARIABLES
  // ============================================================
  $scope.user = user

  // FUNCTIONS
  // ============================================================
  $scope.logout = function() {
    authService.logout().then(function(response) {
      $state.go('login');
    });
  };

}]);

angular.module('nike-clone').controller('stuffCtrl', ["$scope", function($scope) {
  $scope.test = "test";
}])

angular.module('nike-clone').controller('womenCtrl', ["$scope", function($scope) {

}])
