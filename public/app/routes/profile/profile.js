// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("profileCtrl", function($scope, authService, user, $state) {

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
