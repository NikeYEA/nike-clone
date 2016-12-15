angular.module('nike-clone')
.controller('individual-shoeCtrl', function($scope,mainService,$state) {

$scope.qty = 1;



$scope.oneObject = function(){
  mainService.getOneProductById($state.params.id).then(function(response) {
    console.log('this is the   response: ',response);
    $scope.oneId = response[0];
  })
}

$scope.addToCart = function(){
  console.log('hi');
  mainService.addToCart($state.params.id, $scope.qty)
  .catch(function(err) {
    console.log(err);
    $state.go('login');
  });
}


$scope.oneObject();
})
