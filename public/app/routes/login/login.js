// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("loginCtrl", function($scope, authService, $state) {

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

});
