app.factory('CartFactory', function ($http) {

  return {
    getUserCart: function (userID) {
      return $http.get('http://q2-api.herokuapp.com/orders/' + userID)
        .success(function (data) {
          return data;
        });
    },
    addItemToCart: function (userID, productID) {
       return $http.post('http://q2-api.herokuapp.com/orders/new', {user_id: userID, product_id: productID})
        .then(function (data) {
          
        });
    },
    removeItemFromCart: function (orderID) {
      return $http.delete('http://q2-api.herokuapp.com/orders/'+ orderID)
        .then(function (data) {
        });
    }
  }
});