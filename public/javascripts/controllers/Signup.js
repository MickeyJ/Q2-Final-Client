app.controller('SignupController', function ($scope, $http, $location, ValidFactory, $window) {
  var LOCAL_API = 'http://localhost:3000';
  var REMOTE_API = 'http://q2-api.herokuapp.com';
  var Path = '/users/signup';
  var regexEmail = /^([A-Za-z\._\-0-9])*[@]([A-Za-z\._\-0-9])*[\.]([A-Za-z]{2,4})$/;
  var regexPassword = /^(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))[a-zA-Z0-9]*$/;

  $scope.title = 'Sign Up';

  $scope.validName = function(value){
    ValidFactory.checkValid(value.length <= 2, $('#nameLogin'), value);
  };

  $scope.validEmail = function(value){
    ValidFactory.checkValid(!regexEmail.test(value), $('#emailLogin'), value);
  };

  $scope.validPassword = function(value){
    ValidFactory.checkValid(!regexPassword.test(value), $('#passwordLogin'), value);
  };

  $scope.signUp = function(name, email, password){
    $http.post(REMOTE_API + Path, {name: name, email: email, password: password})
      .then(function(data){
        console.log(data);
        if(data.data.error) {
          $scope.error = data.data.error
        } else {
          $window.sessionStorage.setItem('user_id', data.data[0]);
          $window.sessionStorage.setItem('user_name', name);
          window.location.pathname = '/browse'
        }
      })
  }
});