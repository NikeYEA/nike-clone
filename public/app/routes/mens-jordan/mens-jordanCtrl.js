angular.module('nike-clone').controller('mens-jordanCtrl', function($scope, mainService) {

$scope.getMensJordanShoes = function() {
  mainService.getMensJordanShoes().then(function(response) {


    $scope.mensshoes = response.data;

  })
}
$scope.getMensJordanShoes();
})
