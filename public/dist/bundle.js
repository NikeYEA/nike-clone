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
        user: ["authService", "$state", function(authService, $state) {
          return authService.getCurrentUser()
            .then(function(response) {
              if (!response.data.email) {
                return $state.go('login');
              }
              return response.data
            }).catch(function(err) {
              $state.go('login');
            })
        }],
        order: ["mainService", function(mainService) {
          return mainService.getUserOrder().then(function(response) {
            return response.data
          });
        }]
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
      user: ["authService", "$state", function(authService, $state) {
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
      }],
      order: ["mainService", function(mainService) {
        return mainService.getUserOrder().then(function(response) {
          return response.data
        });
      }]
    }
  })
}]);

// INITILIZE SERVICE
// ============================================================
angular.module("nike-clone").service("authService", ["$http", function($http) {

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
      console.log('this is the current user: ',response);
      return response;
    });
  };
  this.register = function(user) {

    return $http({
      method: 'POST',
      url: '/api/register',
      data: user
    }).then(function(response) {
      console.log('this is register response: ',response);
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

  this.getUserOrder = function() {
    return $http({
        method: 'GET',
        url: '/api/order'
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

  this.addToCart = function(product_id, qty) {
    return $http({
      method: 'POST',
      url: '/api/add/item/cart',
      data: {
        product_id: product_id,
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

  //TEST//
  this.getMenRunningShoes = function() {
    return $http({
      method:'GET',
      url: '/api/mens/running'
    }).then(function(response){
      return response;
    })
  }
  this.getWomensLifestyle = function() {
    return $http({
      method:'GET',
      url: '/api/womens/lifestyle'
    }).then(function(response){
      return response;
    })
  }
  this.getWomensRunning = function() {
    return $http({
      method:'GET',
      url: '/api/womens/running'
    }).then(function(response){
      return response;
    })
  }

  this.getWomensTraining = function() {
    return $http({
      method: 'GET',
      url: '/api/womens/training'
    }).then(function(response){
      return response;
    })
  }



  this.getMenBasketballShoes = function() {
    return $http({
      method:'GET',
      url: '/api/mens/basketball'
    }).then(function(response){
      return response;
    })
  }

  this.getMenSoccerShoes = function() {
    return $http({
      method:'GET',
      url: '/api/mens/soccer',
    }).then(function(response){
      return response;
    })
  }

  this.getMenTrainingGymShoes = function() {
    return $http({
      method:'GET',
      url: '/api/mens/training',
    }).then(function(response){
      return response;
    })
  }

  this.getMensSportswearShoes = function() {
    return $http({
      method:'GET',
      url: '/api/mens/sportswear',
    }).then(function(response){
      return response;
    })
  }

  this.getMensJordanShoes = function() {
    return $http({
      method:'GET',
      url: '/api/mens/jordan',
    }).then(function(response){
      return response;
    })
  }

  this.getBoysRunningShoes = function() {
    return $http({
      method: 'GET',
      url: '/api/boys/running'
    }).then(function(response){
      return response;
    })
  }

  this.getBoysSoccer = function() {
    return $http({
      method: 'GET',
      url: '/api/boys/soccer'
    }).then(function(response){
      return response;
    })
  }

  this.getBoysBasketball = function() {
    return $http({
      method: 'GET',
      url: '/api/boys/basketball'
    }).then(function(response){
      return response;
    })
  }

  this.getBoysLifestyle = function() {
    return $http({
      method: 'GET',
      url: '/api/boys/lifestyle'
    }).then(function(response){
      return response;
    })
  }

  this.getBoysJordan = function() {
    return $http({
      method: 'GET',
      url: '/api/boys/jordan'
    }).then(function(response){
      return response;
    })
  }

  this.getGirlsBasketball = function() {
    return $http({
      method: 'GET',
      url: '/api/girls/basketball'
    }).then(function(response){
      return response;
    })
  }

  this.getGirlsLifestyle = function() {
    return $http({
      method: 'GET',
      url: '/api/girls/lifestyle'
    }).then(function(response){
      return response;
    })
  }

  this.getGirlsSoccer = function() {
    return $http({
      method: 'GET',
      url: '/api/girls/soccer'
    }).then(function(response){
      return response;
    })
  }

  this.getGirlsJordan = function() {
    return $http({
      method: 'GET',
      url: '/api/girls/jordan'
    }).then(function(response){
      return response;
    })
  }

  this.getGirlsRunning = function() {
    return $http({
      method: 'GET',
      url: '/api/girls/running'
    }).then(function(response){
      return response;
    })
  }

  this.getOneProductById = function(id) {

    return $http({
      method: 'GET',
      url: '/api/products/' + id
    }).then(function(response){
      return response.data;
    })
  }
  this.completeOrder = function() {

    return $http({
      method: 'PUT',
      url: '/api/order/complete'
    }).then(function(response){
      return response.data;
    })
  }
  this.twilioPics = function() {
    return $http({
      method: 'GET',
      url: '/testtwilio'
    }).then(function(response){
      return response;
    })
  }



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

angular.module('nike-clone').controller('boys-basketballCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getBoysBasketball = function() {
  mainService.getBoysBasketball().then(function(response) {

      console.log('this is the boysBasketball response data: ',response.data);
    $scope.basketballShoes = response.data;

  })
}
$scope.getBoysBasketball();
}])

angular.module('nike-clone').controller('boys-jordanCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getBoysJordan = function() {
  mainService.getBoysJordan().then(function(response) {

      console.log('this is the boysJordan response data: ',response.data);
    $scope.jordanShoes = response.data;

  })
}
$scope.getBoysJordan();
}])

angular.module('nike-clone').controller('boys-lifestyleCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getBoysLifestyle = function() {
  mainService.getBoysLifestyle().then(function(response) {

      console.log('this is the boysLifestyle response data: ',response.data);
    $scope.lifestyleShoes = response.data;

  })
}
$scope.getBoysLifestyle();
}])

angular.module('nike-clone').controller('boysRunningCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getBoysRunningShoes = function() {
  mainService.getBoysRunningShoes().then(function(response) {

      console.log('this is the boysRunningShoe response data: ',response.data);
    $scope.boysShoes = response.data;

  })
}
$scope.getBoysRunningShoes();
}])

angular.module('nike-clone').controller('boys-soccerCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getBoysSoccer = function() {
  mainService.getBoysSoccer().then(function(response) {

      console.log('this is the boysSoccer response data: ',response.data);
    $scope.soccerShoes = response.data;

  })
}
$scope.getBoysSoccer();
}])

angular.module('nike-clone').controller('cartCtrl', ["$scope", "authService", "user", "order", "$state", "mainService", function($scope, authService, user, order, $state, mainService) {



  $scope.user = user;
  $scope.order = order.order;
  $scope.total = 0;
  $scope.productImages = order.products;
  // console.log('this is the $scope.user: ',$scope.user);
  // console.log('this is the $scope.order: ',$scope.order);
  // console.log('this is order.products: ', order.products);

  $scope.refreshOrder = function() {
    mainService.getUserOrder().then(function(response) {
      $scope.order = response.data.order;
      $scope.productImages = response.data.products;
      console.log($scope.order + " THIS IS THE ORDER");
      // console.log("this is the refreshed  cart ", response);
    })
  }

  $scope.getTotalPrice = function() {
    // for (var i = 0; i < order.products.length; i++) {
    //   $scope.total = ($scope.total + (order.products[i].price * order.products[i].quantity));
    //   console.log('$scope.total: ',$scope.total);
    //   console.log('this is order.products[i].quantity: ',order.products[i].quantity);
    //   console.log('order.products[i].price: ',order.products[i].price);
    // }
    order.products.map(function(product) {
      $scope.total = ($scope.total + (product.price * product.quantity));
    })
  }

$scope.getTotalPrice();

$scope.remove = function(id, price) {
  console.log('this is the id: ',id, price);
  mainService.removeFromCart(id).then(function(response) {
    // console.log('this is the remove response: ',response);

    if (response.data === "Item removed successfully") {
      $scope.refreshOrder();
      $scope.total = $scope.total - price;
    }
  })
}
$scope.checkoutcart = function () {
  mainService.completeOrder() .then(function(response) {
    // console.log(response);
  });
}
$scope.twilio = function() {

  mainService.twilioPics().then(function(response) {
    $scope.checkoutcart();

  });
}
$scope.edit = function (id, qty) {
  mainService.updateProductQty(id, qty).then(function(response) {
    // console.log('this is the updateProductQty response: ',response);
  });
}
}])

angular.module('nike-clone').controller('customizeCtrl', ["$scope", function($scope) {
  
}])

angular.module('nike-clone').controller('girlsCtrl', ["$scope", function($scope) {

}])

angular.module('nike-clone').controller('girls-basketballCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getGirlsBasketball = function() {
  mainService.getGirlsBasketball().then(function(response) {

      console.log('this is the girlsBasketball response data: ',response.data);
    $scope.basketballShoes = response.data;

  })
}
$scope.getGirlsBasketball();
}])

angular.module('nike-clone').controller('girls-jordanCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getGirlsJordan = function() {
  mainService.getGirlsJordan().then(function(response) {

      console.log('this is the boysJordan response data: ',response.data);
    $scope.jordanShoes = response.data;

  })
}
$scope.getGirlsJordan();
}])

angular.module('nike-clone').controller('girls-lifestyleCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getGirlsLifestyle = function() {
  mainService.getGirlsLifestyle().then(function(response) {

      console.log('this is the boysJordan response data: ',response.data);
    $scope.lifestyleShoes = response.data;

  })
}
$scope.getGirlsLifestyle();
}])

angular.module('nike-clone').controller('girls-runningCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getGirlsRunning = function() {
  mainService.getGirlsRunning().then(function(response) {

      console.log('this is the boysJordan response data: ',response.data);
    $scope.runningShoes = response.data;

  })
}
$scope.getGirlsRunning();
}])

angular.module('nike-clone').controller('girls-soccerCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getGirlsSoccer = function() {
  mainService.getGirlsSoccer().then(function(response) {

      console.log('this is the girlsSoccer response data: ',response.data);
    $scope.soccerShoes = response.data;

  })
}
$scope.getGirlsSoccer();
}])

angular.module('nike-clone').controller('homeCtrl', ["$scope", function($scope) {

}])

angular.module('nike-clone')
.controller('individual-shoeCtrl', ["$scope", "mainService", "$state", function($scope,mainService,$state) {

$scope.qty = 1;



$scope.oneObject = function(){
  mainService.getOneProductById($state.params.id).then(function(response) {
    console.log('this is the   response: ',response);
    $scope.oneId = response[0];
  })
}

$scope.addToCart = function(){
  console.log('hi');
  mainService.addToCart($state.params.id, $scope.qty)
  .catch(function(err) {
    console.log(err);
    $state.go('login');
  });
}


$scope.oneObject();
}])

// INITILIZE CONTROLLER
// ============================================================
angular.module("nike-clone").controller("loginCtrl", ["$scope", "authService", "$state", "mainService", function($scope, authService, $state, mainService) {

  // VARIABLES
  // ============================================================
  $scope.user= {
    email: "sups@gmail.com",
    password: "lois"
  };

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
      console.log(response);
      if (response.data !== "User and Order created successfully") {
        return alert("Could not register user");
      }
      alert(response.data);
    }).catch(function(err) {
      console.log(err);
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

$(document).ready(function() {
  $('.message a').click(function(){
    $('form').animate({
      height: 'toggle',
      opacity: 'toggle'
    },'slow');
  });
})
}]);

angular.module('nike-clone').controller('menCtrl', ["$scope", function($scope) {
  $scope.showButton1 = function() {
    $scope.fadeButton1 = {
      "opacity":1
    };
  }
  $scope.hideButton1 = function() {
    $scope.fadeButton1 = {
      "opacity":0
    };
  }
  $scope.showButton2 = function() {
    $scope.fadeButton2 = {
      "opacity":1
    };
  }
  $scope.hideButton2 = function() {
    $scope.fadeButton2 = {
      "opacity":0
    };
  }
  $scope.showButton3 = function() {
    $scope.fadeButton3 = {
      "opacity":1
    };
  }
  $scope.hideButton3 = function() {
    $scope.fadeButton3 = {
      "opacity":0
    };
  }
  $scope.showButton4 = function() {
    $scope.fadeButton4 = {
      "opacity":1
    };
  }
  $scope.hideButton4 = function() {
    $scope.fadeButton4 = {
      "opacity":0
    };
  }
  $scope.showButton5 = function() {
    $scope.fadeButton5 = {
      "opacity":1
    };
  }
  $scope.hideButton5 = function() {
    $scope.fadeButton5 = {
      "opacity":0
    };
  }
}])

angular.module('nike-clone').controller('mens-basketballCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getMenBasketballShoes = function() {
  mainService.getMenBasketballShoes().then(function(response) {

      console.log('this is the mensbasketballshoe response data: ',response.data);
    $scope.mensshoes = response.data;

  })
}
$scope.getMenBasketballShoes();
}])

angular.module('nike-clone').controller('mens-jordanCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getMensJordanShoes = function() {
  mainService.getMensJordanShoes().then(function(response) {


    $scope.mensshoes = response.data;

  })
}
$scope.getMensJordanShoes();
}])

angular.module('nike-clone').controller('mens-running-shoesCtrl', ["$scope", "mainService", "$stateParams", function($scope, mainService,$stateParams) {

$scope.getMenRunningShoes = function() {
  mainService.getMenRunningShoes().then(function(response) {


    $scope.mensshoes = response.data;
    
  })
}
$scope.getMenRunningShoes();
}])

angular.module('nike-clone').controller('mens-soccerCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getMenSoccerShoes = function() {
  mainService.getMenSoccerShoes().then(function(response) {


    $scope.mensshoes = response.data;

  })
}
$scope.getMenSoccerShoes();
}])

angular.module('nike-clone').controller('mens-sportswearCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getMensSportswearShoes = function() {
  mainService.getMensSportswearShoes().then(function(response) {


    $scope.mensshoes = response.data;

  })
}
$scope.getMensSportswearShoes();
}])

angular.module('nike-clone').controller('mens-training-gymCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getMenTrainingGymShoes = function() {
  mainService.getMenTrainingGymShoes().then(function(response) {


    $scope.mensshoes = response.data;

  })
}
$scope.getMenTrainingGymShoes();
}])

angular.module('nike-clone').controller('pathCtrl', ["$scope", function($scope) {

}])

angular.module('nike-clone').controller('paymentsCtrl', ["$scope", "authService", "user", "order", "$state", "mainService", "stripe", "$http", function($scope, authService, user, order, $state, mainService, stripe, $http) {

//   $scope.user = user;
//   $scope.order = order;
//   $scope.total = 0;
//   $scope.productImages = order.products;
//   console.log('this is the $scope.user: ',$scope.user);
//   console.log('this is the $scope.order: ',$scope.order);
//   console.log('this is order.products: ', order.products);
//
//   $scope.getTotalPrice = function() {
//     for (var i = 0; i < order.products.length; i++) {
//       $scope.total = $scope.total + order.products[i].price;
//       console.log('$scope.total: ',$scope.total);
//       console.log('order.products[i].price: ',order.products[i].price);
//     }
//   }
//
// console.log('this is   $scope.total: ',$scope.total);
// $scope.getTotalPrice();
//
// //==================STRIPE==============================
// $scope.passValues = function(user.id, order.id, $scope.total) {
//   $scope.stripeUserId = user.id;
//   $scope.stripeOrderId = order.id;
//   $scope.stripeTotal = $scope.total;
// }
//
// $scope.payment = {};
// $scope.payment.amount = 23;
//
// $scope.charge = function() {
//   return stripe.card.createToken($scope.payment.card)
//   .then(function(response) {
//     console.log('token created for card ending in ',response.card.last4);
//     var payment = angular.copy($scope.payment);
//     payment.card = void 0;
//     payment.token = response.id;
//     console.log($scope.stripeTotal);
//     //return $http.post('/api/payment', payment);
//     return $http({
//       method: 'POST',
//       url: '/api/payment',
//       data: {
//         amount: $scope.stripeTotal,
//         payment: payment
//       }
//     })
//   })
//   .then(function(payment) {
//     console.log('successfully submitted payment for $', payment);
//     swal({
//       title: "Thank You!",
//       text: "Your order will be shipped within 3 business days.",
//       confirmButtonText: "Continue exploring Nike"
//     })
//   })
//   .catch(function(err) {
//     if(err.type && /^Stripe/.test(err.type)) {
//       console.log('Stripe error: ',err.message);
//     }
//     else {
//       console.log('Other errors occurred, possibly with your API', err.message);
//     }
//   });
// };

}])

// INITILIZE CONTROLLER
// ============================================================
angular.module("nike-clone").controller("profileCtrl", ["$scope", "authService", "user", "order", "$state", function($scope, authService, user, order, $state) {

  // VARIABLES
  // ============================================================
  $scope.user = user;
  $scope.order = order;
console.log('THIS IS THE USER: ',$scope.user);
console.log('THIS IS THE ORDER: ',$scope.order);
  // FUNCTIONS
  // ============================================================
  $scope.logout = function() {
    authService.logout().then(function(response) {
      $state.go('login');
    });
  };

}]);

angular.module('nike-clone').controller('womenCtrl', ["$scope", function($scope) {

}])

angular.module('nike-clone').controller('womenLifestyleCtrl', ["$scope", "mainService", function($scope, mainService) {

    $scope.getWomensLifestyle = function() {
      mainService.getWomensLifestyle().then(function(response) {
            

         $scope.mensshoes = response.data;

      })
    }
    $scope.getWomensLifestyle();
}])

angular.module('nike-clone').controller('womens-trainingCtrl', ["$scope", "mainService", function($scope, mainService) {

$scope.getWomensTraining = function() {
  mainService.getWomensTraining().then(function(response) {

      console.log('this is the girlsBasketball response data: ',response.data);
    $scope.trainingShoes = response.data;

  })
}
$scope.getWomensTraining();
}])

angular.module('nike-clone').controller('womensRunningCtrl', ["$scope", "mainService", function($scope, mainService) {

    $scope.getWomensRunning = function() {
      mainService.getWomensRunning().then(function(response) {


         $scope.mensshoes = response.data;

      })
    }
    $scope.getWomensRunning();
}])
