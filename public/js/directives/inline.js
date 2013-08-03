function inlineFactory(template) {

  var KEY_CODE_ENTER = 13;

  var config = {
    restrict: 'E',
    replace: true,
    scope: {
      action: '=',
      model: '=',
      type: '@',
      min: '@',
      ident: '=',
      options: '='
    },
    template: template,
    link: function(scope, element, attrbs) {
      var children = element.children();
      var span  = angular.element(children[0]);
      var input = angular.element(children[1]);

      //puvodni obsah
      var content;
      var updated;

      function send(e) {
        var newContent = element.text().trim();
        if (newContent !== '') {
          scope.$apply('mode=false');
        }
        if (newContent !== content && !updated) {
          scope.action(e, scope.ident);
          updated = true;
        }
      }

      //ztrata focusu, ulozit zmenu
      input.bind('blur', function(e){
        send(e);
      });

      //uzivatel kliknul na enter, ulozit zmenu
      input.bind('keypress', function(e){
        if (e.charCode === KEY_CODE_ENTER) send(e);
      });

      //po kliknuti na text zobrazit input pro editaci
      span.bind('click', function() {
        content = element.text().trim();
        scope.$apply('mode=true');
        input[0].focus();
        updated = false;
      });
    }
  }

  return function(){
    return config;
  }
}


/**
 * <inline model='page.text' action='update'/>
 */

angular.module('zdrojak.directive').directive('inline', inlineFactory(
  '<span>' +
  '<span ng-hide="mode">{{model}}</span>' +
  '<input class="input-small" type="{{type}}" min="{{min}}" ng-show="mode" ng-model="model" required>' +
  '</span>'
));

/**
 * <inline model='page.text' action='update'/>
 */

angular.module('zdrojak.directive').directive('inlineSelect', inlineFactory(
  '<span>' +
  '<span ng-hide="mode">{{options[model]}}</span>' +
  '<select ng-model="model" ng-show="mode" ng-options="k as v for (k,v) in options" required></select>' +
  '</span>'
));