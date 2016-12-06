angular.module('nike-clone').controller('boys-basketballCtrl', function($scope, mainService) {

$scope.getBoysBasketball = function() {
  mainService.getBoysBasketball().then(function(response) {

      console.log('this is the boysBasketball response data: ',response.data);
    $scope.basketballShoes = response.data;

  })
}
$scope.getBoysBasketball();
})
