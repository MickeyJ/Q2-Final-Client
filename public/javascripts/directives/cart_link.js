
app.directive('fapCart', function($window, $interval, CartFactory){
  return{
    restrict: 'E',
    link: function(scope, element, attr){
      $interval(function() {
        var currentUserID = $window.sessionStorage.getItem('user_id');

        if(currentUserID){
          var cart = CartFactory.getUserCart(currentUserID).then(function(cart){

            var itemPrices = cart.data.map(function(x){
              return x.price
            });

            var cartTotal = itemPrices.reduce(function(a, b){
              return a + b;
            });
            var itemCount = cart.data.length;
            element.text('Cart [' + itemCount + '] $'+ cartTotal);
          });
        }
      }, 100);
    }
  }
});