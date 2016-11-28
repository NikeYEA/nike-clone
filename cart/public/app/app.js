var app = angular.module("app", ['ui.router']);

angular.module("app")
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider

			.state('user', {
			url: '/user',
			templateUrl: './app/routes/user/userTmpl.html',
			controller: 'userCtrl'
		})


		.state('order', {
			url: '/order/:id',
			templateUrl: './app/routes/order/orderTmpl.html',
			controller: 'orderCtrl',
			resolve: {
				order: function(mainService, $stateParams) {
					return mainService.getUserOrder($stateParams.id);
				}
			}
		})


		.state('products', {
			url: '/products/:id/:cartid',
			templateUrl: './app/routes/products/productsTmpl.html',
			controller: 'productsCtrl',
			resolve: {
				products: function(mainService, $state) {
					return mainService.getProducts();
				}
			}
		});


		$urlRouterProvider.otherwise('user');
	});
