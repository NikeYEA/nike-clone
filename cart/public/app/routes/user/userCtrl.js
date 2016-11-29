angular.module("app")
	.controller("userCtrl", function($scope, mainService) {

		$scope.getUsers = function() {
			mainService.getUsers()
				.then(function(response) {
					$scope.users = response.data;
					console.log(response);

				});
		};
		$scope.getUsers();


	});