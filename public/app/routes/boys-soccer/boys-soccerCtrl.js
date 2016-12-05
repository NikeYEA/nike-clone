angular.module('nike-clone').controller('boys-soccerCtrl', function($scope, mainService) {

$scope.getBoysSoccer = function() {
  mainService.getBoysSoccer().then(function(response) {

      console.log('this is the boysSoccer response data: ',response.data);
    $scope.soccerShoes = response.data;

  })
}
$scope.getBoysSoccer();
})
