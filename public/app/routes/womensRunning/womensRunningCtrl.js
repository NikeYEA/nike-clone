angular.module('nike-clone').controller('womensRunningCtrl', function($scope, mainService) {

    $scope.getWomensRunning = function() {
      mainService.getWomensRunning().then(function(response) {


         $scope.mensshoes = response.data;

      })
    }
    $scope.getWomensRunning();
})
