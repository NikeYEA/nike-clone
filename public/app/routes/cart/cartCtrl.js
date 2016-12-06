angular.module('nike-clone').controller('cartCtrl', function($scope, authService, user, order, $state) {

  $scope.user = user;
  $scope.order = order;

  $scope.productImages = order.products;
  console.log('this is the $scope.user: ',$scope.user);
  console.log('this is the $scope.order: ',$scope.order);

})
