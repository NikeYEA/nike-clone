angular.module('nike-clone').service('mainService', function($http) {
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



});
