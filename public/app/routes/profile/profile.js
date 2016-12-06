// INITILIZE CONTROLLER
// ============================================================
angular.module("nike-clone").controller("profileCtrl", function($scope, authService, user, order, $state) {

  // VARIABLES
  // ============================================================
  $scope.user = user;
  $scope.order = order;

  // FUNCTIONS
  // ============================================================
  $scope.logout = function() {
    authService.logout().then(function(response) {
      $state.go('login');
    });
  };

});
