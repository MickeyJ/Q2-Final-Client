app.controller('ModifyController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000';
  var REMOTE_API = 'http://q2-api.herokuapp.com';

  loadUsers();
  loadProducts();
  loadOrders();

  function loadUsers(){
    $http.get(REMOTE_API +'/users')
      .then(function (data) {
        $scope.users = data.data;
      });
  }

  function loadProducts(){
    $http.get(REMOTE_API +'/products')
      .then(function (data) {
        $scope.products = data.data;
      });
  }

  function loadOrders(){
    $http.get(REMOTE_API +'/orders')
      .then(function (data) {
        $scope.orders = data.data;
      });
  }

});