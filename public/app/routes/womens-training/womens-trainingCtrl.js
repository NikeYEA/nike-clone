angular.module('nike-clone').controller('womens-trainingCtrl', function($scope, mainService) {

$scope.getWomensTraining = function() {
  mainService.getWomensTraining().then(function(response) {

      console.log('this is the girlsBasketball response data: ',response.data);
    $scope.trainingShoes = response.data;

  })
}
$scope.getWomensTraining();
})
