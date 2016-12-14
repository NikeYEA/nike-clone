angular.module('nike-clone').controller('menCtrl', function($scope) {
  $scope.showButton1 = function() {
    $scope.fadeButton1 = {
      "opacity":1
    };
  }
  $scope.hideButton1 = function() {
    $scope.fadeButton1 = {
      "opacity":0
    };
  }
  $scope.showButton2 = function() {
    $scope.fadeButton2 = {
      "opacity":1
    };
  }
  $scope.hideButton2 = function() {
    $scope.fadeButton2 = {
      "opacity":0
    };
  }
  $scope.showButton3 = function() {
    $scope.fadeButton3 = {
      "opacity":1
    };
  }
  $scope.hideButton3 = function() {
    $scope.fadeButton3 = {
      "opacity":0
    };
  }
  $scope.showButton4 = function() {
    $scope.fadeButton4 = {
      "opacity":1
    };
  }
  $scope.hideButton4 = function() {
    $scope.fadeButton4 = {
      "opacity":0
    };
  }
  $scope.showButton5 = function() {
    $scope.fadeButton5 = {
      "opacity":1
    };
  }
  $scope.hideButton5 = function() {
    $scope.fadeButton5 = {
      "opacity":0
    };
  }
})
