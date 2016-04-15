app.factory('ValidFactory', function ($http) {
  return {
    checkValid: function (condition, target, value) {
      if (condition) {
        $(target).addClass('invalid-input');
      } else {
        $(target).removeClass('invalid-input');
      }
      if(value.length < 1){
        $(target).removeClass('invalid-input')
      }
    }
  }
});
