angular.module('nike-clone').controller('girls-soccerCtrl', function($scope, mainService) {

$scope.getGirlsSoccer = function() {
  mainService.getGirlsSoccer().then(function(response) {

      console.log('this is the girlsSoccer response data: ',response.data);
    $scope.soccerShoes = response.data;

  })
}
$scope.getGirlsSoccer();
})
