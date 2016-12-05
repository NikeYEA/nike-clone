angular.module('nike-clone').controller('mens-sportswearCtrl', function($scope, mainService) {

$scope.getMensSportswearShoes = function() {
  mainService.getMensSportswearShoes().then(function(response) {


    $scope.mensshoes = response.data;

  })
}
$scope.getMensSportswearShoes();
})
