// INITILIZE SERVICE
// ============================================================
angular.module("nike-clone").service("authService", function($http) {

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


});
