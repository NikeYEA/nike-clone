angular.module("nike-clone")
	.controller("productsCtrl", function($scope, products, mainService, $state) {

		$scope.products = products.data;
		$scope.orderid = $state.params.cartid;
		$scope.qty = 1;

		$scope.addToCart = function(id, product_id, qty) {
			mainService.addToCart(id, product_id, qty)
				.then(function(response) {
					console.log(response.data);
				});
		};


	});
