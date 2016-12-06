angular.module('nike-clone').controller('boys-lifestyleCtrl', function($scope, mainService) {

$scope.getBoysLifestyle = function() {
  mainService.getBoysLifestyle().then(function(response) {

      console.log('this is the boysLifestyle response data: ',response.data);
    $scope.lifestyleShoes = response.data;

  })
}
$scope.getBoysLifestyle();
})
