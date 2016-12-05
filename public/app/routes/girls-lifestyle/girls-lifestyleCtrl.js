angular.module('nike-clone').controller('girls-lifestyleCtrl', function($scope, mainService) {

$scope.getGirlsLifestyle = function() {
  mainService.getGirlsLifestyle().then(function(response) {

      console.log('this is the boysJordan response data: ',response.data);
    $scope.lifestyleShoes = response.data;

  })
}
$scope.getGirlsLifestyle();
})
