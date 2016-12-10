// INITILIZE CONTROLLER
// ============================================================
angular.module("nike-clone").controller("loginCtrl", function($scope, authService, $state, mainService) {

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
});
