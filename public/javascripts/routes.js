app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeController'
    })
    .when('/admin', {
      templateUrl: '/partials/admin.html',
      controller: 'AdminController'
    })
    .when('/signup', {
      templateUrl: '/partials/signup.html',
      controller: 'SignupController'
    })
    .when('/login', {
      templateUrl: '/partials/login.html',
      controller: 'LoginController'
    })
    .when('/product/:id', {
      templateUrl: '/partials/product_detail.html',
      controller: 'ProductDetailController'
    })
    .when('/browse', {
      templateUrl: '/partials/browse.html',
      controller: 'BrowseController'
    })
    .when('/cart/:user?', {
      templateUrl: '/partials/cart.html',
      controller: 'CartController'
    })
    .when('/manage-data', {
      templateUrl: '/partials/modify.html',
      controller: 'ModifyController'
    })
    .otherwise({redirectTo:'/'});
  
  $locationProvider.html5Mode(true);
});
