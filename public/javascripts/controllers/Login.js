app.controller('LoginController', function ($scope, $http, $location, $window, $cookies, ValidFactory) {
  var REMOTE_API = 'https://q2-api.herokuapp.com';
  var Path = '/users/login';
  var regexEmail = /^([A-Za-z\._\-0-9])*[@]([A-Za-z\._\-0-9])*[\.]([A-Za-z]{2,4})$/;
  var regexPassword = /^(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))[a-zA-Z0-9]*$/;

  $scope.title = 'Login';

  $scope.validEmail = function(value){
    ValidFactory.checkValid(!regexEmail.test(value), $('#emailLogin'), value);
  };

  $scope.validPassword = function(value){
    ValidFactory.checkValid(!regexPassword.test(value), $('#passwordLogin'), value);
  };

  $scope.userLogin = function(email, password){
    $http.post(REMOTE_API + Path, {email: email, password: password})
      .then(function(data){
        if(data.data.error){
          $scope.error = data.data.error
        } else {
          $window.sessionStorage.setItem('user_id', data.data.user_id);
          $window.sessionStorage.setItem('user_name', data.data.user_name);

          if(data.data.user_admin){
            $window.sessionStorage.setItem('user_admin', data.data.user_admin);
            window.location.pathname = "/manage-data"
          } else {
            window.location.pathname = "/cart/"+ data.data.user_id;
          }
        }
      })
  }
});