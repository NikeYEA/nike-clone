angular.module('nike-clone').controller('cartCtrl', function($scope, authService, user, order, $state, mainService) {



  $scope.user = user;
  $scope.order = order.order;
  $scope.total = 0;
  $scope.productImages = order.products;
  // console.log('this is the $scope.user: ',$scope.user);
  // console.log('this is the $scope.order: ',$scope.order);
  // console.log('this is order.products: ', order.products);

  $scope.refreshOrder = function() {
    mainService.getUserOrder().then(function(response) {
      $scope.order = response.data.order;
      $scope.productImages = response.data.products;
      console.log($scope.order + " THIS IS THE ORDER");
      // console.log("this is the refreshed  cart ", response);
    })
  }

  $scope.getTotalPrice = function() {
    // for (var i = 0; i < order.products.length; i++) {
    //   $scope.total = ($scope.total + (order.products[i].price * order.products[i].quantity));
    //   console.log('$scope.total: ',$scope.total);
    //   console.log('this is order.products[i].quantity: ',order.products[i].quantity);
    //   console.log('order.products[i].price: ',order.products[i].price);
    // }
    order.products.map(function(product) {
      $scope.total = ($scope.total + (product.price * product.quantity));
    })
  }

$scope.getTotalPrice();

$scope.remove = function(id, price) {
  console.log('this is the id: ',id, price);
  mainService.removeFromCart(id).then(function(response) {
    // console.log('this is the remove response: ',response);

    if (response.data === "Item removed successfully") {
      $scope.refreshOrder();
      $scope.total = $scope.total - price;
    }
  })
}
$scope.checkoutcart = function () {
  mainService.completeOrder() .then(function(response) {
    // console.log(response);
  });
}
$scope.twilio = function() {

  mainService.twilioPics().then(function(response) {
    $scope.checkoutcart();

  });
}
$scope.edit = function (id, qty) {
  mainService.updateProductQty(id, qty).then(function(response) {
    // console.log('this is the updateProductQty response: ',response);
  });
}
})
