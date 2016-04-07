app.controller('MainController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000/users';
  var EXTERNAL_API = 'https://my-testing-api.herokuapp.com/users';
  
  loadUserData();
  $scope.msg = 'hi bob';

  function loadUserData(){
    $http.get(LOCAL_API)
      .then(function (data) {
        $scope.data = data.data;
      });
  }

  $scope.signUp = function(){
    $http.post(LOCAL_API +'/signup')
      .then(function(){
        loadUserData()
      })
  }
});