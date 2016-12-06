angular.module('nike-clone').controller('girls-jordanCtrl', function($scope, mainService) {

$scope.getGirlsJordan = function() {
  mainService.getGirlsJordan().then(function(response) {

      console.log('this is the boysJordan response data: ',response.data);
    $scope.jordanShoes = response.data;

  })
}
$scope.getGirlsJordan();
})
