angular.module('nike-clone').controller('mens-soccerCtrl', function($scope, mainService) {

$scope.getMenSoccerShoes = function() {
  mainService.getMenSoccerShoes().then(function(response) {


    $scope.mensshoes = response.data;

  })
}
$scope.getMenSoccerShoes();
})
