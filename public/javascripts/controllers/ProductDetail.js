
app.controller('ProductDetailController', function ($scope, $http, $window, $routeParams, CartFactory) {
  var REMOTE_API = 'https://q2-api.herokuapp.com/products/';
  var wikiStart = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
  var wikiEnd = '&format=json';

  loadProductDetail();
  
  $scope.userID = $window.sessionStorage.getItem('user_id');

  $scope.addItem = CartFactory.addItemToCart;

  function loadProductDetail(){

    $http.get(REMOTE_API + $routeParams.id)
      .then(function (data) {
        console.log(data);
        $http.get(wikiStart + data.data.name +wikiEnd).then(function (wiki){
          console.log('Heloo', wiki);
        });
        $scope.product = data.data;
      });
  }
});