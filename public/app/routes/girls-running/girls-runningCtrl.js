angular.module('nike-clone').controller('girls-runningCtrl', function($scope, mainService) {

$scope.getGirlsRunning = function() {
  mainService.getGirlsRunning().then(function(response) {

      console.log('this is the boysJordan response data: ',response.data);
    $scope.runningShoes = response.data;

  })
}
$scope.getGirlsRunning();
})
