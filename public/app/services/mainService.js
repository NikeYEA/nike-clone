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

  //TEST//
  this.getMenRunningShoes = function() {
    return $http({
      method:'GET',
      url: '/api/mens/running'
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

});
