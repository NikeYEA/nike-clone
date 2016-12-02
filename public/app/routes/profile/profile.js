// INITILIZE CONTROLLER
// ============================================================
angular.module("nike-clone").controller("profileCtrl", function($scope, authService, user, $state) {

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

});
