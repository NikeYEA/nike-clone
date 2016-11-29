angular.module("nike-clone")
	.controller("userCtrl", function($scope, mainService) {

		$scope.getUsers = function() {
			mainService.getUsers()
				.then(function(response) {
					$scope.users = response.data;
					console.log(response);

				});
		};

		$scope.postUsers = function(fname,email){
			mainService.postUsers(fname,email).then(function(response){
				console.log('this is the postuser response: ',response);
			})
		}

		$scope.getUsers();


	});
