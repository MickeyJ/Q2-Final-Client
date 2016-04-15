app.controller('CartController', function ($scope, $http, $routeParams, $sessionStorage, $window, CartFactory) {

  $scope.user = $routeParams.user;
  $scope.userName = $window.sessionStorage.getItem('user_name');
  $scope.userID = $window.sessionStorage.getItem('user_id');
  $scope.userAdmin = $window.sessionStorage.getItem('user_admin');
  $scope.cartStatus = 'Here is stuff in your cart';

  $scope.getCart = CartFactory.getUserCart;
  $scope.removeItem = CartFactory.removeItemFromCart;

  var userId = $routeParams.user || $scope.userID;

  if($scope.user || $scope.userName){
    $scope.getCart(userId).then(function(data){
      $scope.orders = data.data;
      
    });
  }
});