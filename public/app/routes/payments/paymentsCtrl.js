angular.module('nike-clone').controller('paymentsCtrl', function($scope, authService, user, order, $state, mainService, stripe, $http) {

//   $scope.user = user;
//   $scope.order = order;
//   $scope.total = 0;
//   $scope.productImages = order.products;
//   console.log('this is the $scope.user: ',$scope.user);
//   console.log('this is the $scope.order: ',$scope.order);
//   console.log('this is order.products: ', order.products);
//
//   $scope.getTotalPrice = function() {
//     for (var i = 0; i < order.products.length; i++) {
//       $scope.total = $scope.total + order.products[i].price;
//       console.log('$scope.total: ',$scope.total);
//       console.log('order.products[i].price: ',order.products[i].price);
//     }
//   }
//
// console.log('this is   $scope.total: ',$scope.total);
// $scope.getTotalPrice();
//
// //==================STRIPE==============================
// $scope.passValues = function(user.id, order.id, $scope.total) {
//   $scope.stripeUserId = user.id;
//   $scope.stripeOrderId = order.id;
//   $scope.stripeTotal = $scope.total;
// }
//
// $scope.payment = {};
// $scope.payment.amount = 23;
//
// $scope.charge = function() {
//   return stripe.card.createToken($scope.payment.card)
//   .then(function(response) {
//     console.log('token created for card ending in ',response.card.last4);
//     var payment = angular.copy($scope.payment);
//     payment.card = void 0;
//     payment.token = response.id;
//     console.log($scope.stripeTotal);
//     //return $http.post('/api/payment', payment);
//     return $http({
//       method: 'POST',
//       url: '/api/payment',
//       data: {
//         amount: $scope.stripeTotal,
//         payment: payment
//       }
//     })
//   })
//   .then(function(payment) {
//     console.log('successfully submitted payment for $', payment);
//     swal({
//       title: "Thank You!",
//       text: "Your order will be shipped within 3 business days.",
//       confirmButtonText: "Continue exploring Nike"
//     })
//   })
//   .catch(function(err) {
//     if(err.type && /^Stripe/.test(err.type)) {
//       console.log('Stripe error: ',err.message);
//     }
//     else {
//       console.log('Other errors occurred, possibly with your API', err.message);
//     }
//   });
// };

})
