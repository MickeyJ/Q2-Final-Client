app.controller('ProductDetailController', function ($scope, $http, $window, $routeParams, CartFactory) {
  var REMOTE_API = 'https://q2-api.herokuapp.com/products/';

  loadProductDetail();

  $scope.title = 'Product Detail';
  $scope.userID = $window.sessionStorage.getItem('user_id');

  $scope.addItem = CartFactory.addItemToCart;

  function loadProductDetail(){
    $http.get(REMOTE_API + $routeParams.id)
      .then(function (data) {
        $scope.product = data.data;
      });
  }
});