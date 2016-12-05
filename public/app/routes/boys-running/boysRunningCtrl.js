angular.module('nike-clone').controller('boysRunningCtrl', function($scope, mainService) {

$scope.getBoysRunningShoes = function() {
  mainService.getBoysRunningShoes().then(function(response) {

      console.log('this is the boysRunningShoe response data: ',response.data);
    $scope.boysShoes = response.data;

  })
}
$scope.getBoysRunningShoes();
})
