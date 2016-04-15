app.controller('BrowseController', function ($scope, $http, $window, CartFactory) {
  var LOCAL_API = 'http://q2-api.herokuapp.com/products';

  loadProductData();
  
  $scope.title = 'Browse';
  $scope.userID = $window.sessionStorage.getItem('user_id');
  
  $scope.addItem = CartFactory.addItemToCart;
  
  function loadProductData(){
    $http.get(LOCAL_API).then(function (data) {
        $scope.products = data.data;
      });
  }
});