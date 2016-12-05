angular.module('nike-clone').controller('mens-basketballCtrl', function($scope, mainService) {

$scope.getMenBasketballShoes = function() {
  mainService.getMenBasketballShoes().then(function(response) {

      console.log('this is the mensbasketballshoe response data: ',response.data);
    $scope.mensshoes = response.data;

  })
}
$scope.getMenBasketballShoes();
})
