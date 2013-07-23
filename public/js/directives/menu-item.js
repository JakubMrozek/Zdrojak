
angular.module('zdrojak.directive').directive('menuItem', function(){
  var config = {
    restrict: 'A',
    link: function(scope, element, attrbs) {
      scope.$watch('menuItem', function(){
        if (scope.menuItem == attrbs.menuItem) {
          attrbs.$set('class', 'active');
        } else {
          attrbs.$set('class', '');
        }
      })
    }
  }
  return config;
});