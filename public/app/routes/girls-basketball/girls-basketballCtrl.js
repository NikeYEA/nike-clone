angular.module('nike-clone').controller('girls-basketballCtrl', function($scope, mainService) {

$scope.getGirlsBasketball = function() {
  mainService.getGirlsBasketball().then(function(response) {

      console.log('this is the girlsBasketball response data: ',response.data);
    $scope.basketballShoes = response.data;

  })
}
$scope.getGirlsBasketball();
})
