angular.module('nike-clone').controller('mens-running-shoesCtrl', function($scope, mainService) {

$scope.getMenRunningShoes = function() {
  mainService.getMenRunningShoes().then(function(response) {

    
    $scope.mensshoes = response.data;

  })
}
$scope.getMenRunningShoes();
})
