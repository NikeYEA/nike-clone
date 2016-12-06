angular.module('nike-clone')
.controller('individual-shoeCtrl', function($scope,mainService,$stateParams) {
console.log('this is the FUCKIIIIIMNG state params: ',$stateParams);

$scope.oneObject = function(){
  mainService.getOneProductById($stateParams.id).then(function(response) {
    console.log('this is the mofo response: ',response);
    $scope.oneId = response[0];
  })
}

$scope.oneObject();
})
