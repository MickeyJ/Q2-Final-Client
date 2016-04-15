app.controller('AdminController', function ($window, $scope, $http, ValidFactory) {
  var REMOTE_API = 'https://q2-api.herokuapp.com';

  var regexEmail = /^([A-Za-z\._\-0-9])*[@]([A-Za-z\._\-0-9])*[\.]([A-Za-z]{2,4})$/;
  var regexPassword = /^(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))[a-zA-Z0-9]*$/;
  
  $scope.title = 'Admin';

  $scope.validName = function(value){
    ValidFactory.checkValid(value.length <= 2, $('#nameLogin'), value);
  };

  $scope.validEmail = function(value){
    ValidFactory.checkValid(!regexEmail.test(value), $('#emailLogin'), value);
  };

  $scope.validPassword = function(value){
    ValidFactory.checkValid(!regexPassword.test(value), $('#passwordLogin'), value);
  };


  $scope.adminSignup = function(name, email, password){
    $http.post(REMOTE_API +'/admins/signup', {name: name, email: email, password: password})
      .then(function(data){
        if(data.data.error){
          $scope.error = data.data.error
        } else {
          $window.sessionStorage.setItem('user_id', data.data[0]);
          $window.sessionStorage.setItem('user_name', name);
          $window.sessionStorage.setItem('user_admin', true);
          window.location.pathname = "/manage-data"
        }
      })
  };

});