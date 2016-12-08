// INITILIZE CONTROLLER
// ============================================================
angular.module("nike-clone").controller("profileCtrl", function($scope, authService, user, order, $state) {

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

});
