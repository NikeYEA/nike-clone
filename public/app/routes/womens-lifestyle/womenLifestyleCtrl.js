angular.module('nike-clone').controller('womenLifestyleCtrl', function($scope, mainService) {

    $scope.getWomensLifestyle = function() {
      mainService.getWomensLifestyle().then(function(response) {
            

         $scope.mensshoes = response.data;

      })
    }
    $scope.getWomensLifestyle();
})
