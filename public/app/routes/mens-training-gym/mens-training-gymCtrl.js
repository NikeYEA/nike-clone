angular.module('nike-clone').controller('mens-training-gymCtrl', function($scope, mainService) {

$scope.getMenTrainingGymShoes = function() {
  mainService.getMenTrainingGymShoes().then(function(response) {


    $scope.mensshoes = response.data;

  })
}
$scope.getMenTrainingGymShoes();
})
