angular.module("nike-clone")
	.controller("orderCtrl", function($scope, order, $state, mainService) {

		$scope.order = order.data.order;
		$scope.products = order.data.products;
		$scope.id = $state.params.id;


		$scope.changeQty = function(id, qty) {
			mainService.updateProductQty(id, qty)
				.then(function(response) {
					console.log(response.data);
				});
		};
		$scope.getOrder = function() {
			mainService.getUserOrder($scope.id)
				.then(function(response) {
					$scope.order = response.data.order;
					$scope.products = response.data.products;
				});
		};
		$scope.removeFromCart = function(id) {
			mainService.removeFromCart(id)
				.then(function(response) {
					console.log(response.data);
					$scope.getOrder();
				});
		};
		$scope.placeOrder = function(id, orderid) {
			mainService.placeOrder(id, orderid)
				.then(function(response) {
					console.log(response.data);
					$state.go('user');				});
	};

});
