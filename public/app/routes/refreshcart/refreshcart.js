angular.module('nike-clone').controller('refresh', function($scope) {

    $scope.user = user;
    $scope.order = order.order;
    $scope.total = 0;
    $scope.productImages = order.products;
    console.log('this is the $scope.user: ',$scope.user);
    console.log('this is the $scope.order: ',$scope.order);
    console.log('this is order.products: ', order.products);


    $scope.getTotalPrice = function() {
      for (var i = 0; i < order.products.length; i++) {
        $scope.total = ($scope.total + (order.products[i].price * order.products[i].quantity));
        console.log('$scope.total: ',$scope.total);
        console.log('this is order.products[i].quantity: ',order.products[i].quantity);
        console.log('order.products[i].price: ',order.products[i].price);
      }
    }

  console.log('this is $scope.total: ',$scope.total);
  $scope.getTotalPrice();

  $scope.remove = function(id) {
    console.log('this is the id: ',id);
    mainService.removeFromCart(id).then(function(response) {
      console.log('this is the remove response: ',response);
    })
  }

  $scope.checkoutcart = function () {
    mainService.completeOrder() .then(function(response) {
      console.log(response);

    });
  }

  $scope.edit = function (id, qty) {
    mainService.updateProductQty(id, qty).then(function(response) {
      console.log('this is the updateProductQty response: ',response);

    });
  }

})