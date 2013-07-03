
angular.module('zdrojak.directive').directive('upload', function upload(){
  var config = {
    restrict: 'A',
    scope: {
      upload: '='
    },
    link: function(scope, element) {
      element.bind('change', function(){
        scope.$apply(function(){
          scope.upload(element[0]);
        });
      })
    }
  }
  return config;
});