angular.module('nike-clone').controller('boys-jordanCtrl', function($scope, mainService) {

$scope.getBoysJordan = function() {
  mainService.getBoysJordan().then(function(response) {

      console.log('this is the boysJordan response data: ',response.data);
    $scope.jordanShoes = response.data;

  })
}
$scope.getBoysJordan();
})
