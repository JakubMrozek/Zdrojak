['dragstart', 'dragenter', 'dragover', 'dragleave', 'drag', 'drop', 'dragend'].forEach(function(name){
  angular.module('zdrojak.directive').directive(name, function(){
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var fn = attrs[name];
        if (!fn) return;
        element.bind(name, function(ev){
          scope.$apply(function(){
            scope[fn](ev);
          });
        });
      }
    };
  });
});