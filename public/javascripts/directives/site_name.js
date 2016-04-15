app.directive('fapSiteName', function(){
  return{
    restrict: 'A',
    link: function(s,e,a){
      e.text('Fruite Company');
      e.bind('click', function(){
        console.log(e.text);
      })
    }
  }
});