angular.module('fifty-three').service('stripeService', function($http) {


  this.getToken = function(){
    return $http({
      method: 'POST',
      url: '/charge'
    })
  }
})
