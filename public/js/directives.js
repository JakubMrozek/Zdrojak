'use strict';

/* Directives */


var inlineFactory = function(enterCommits, template) {
  return function(){
    var KEY_CODE_ENTER = 13;
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        action: '=action',
        model: '=model'
      },
      template: template,
      link: function(scope, element) {
        var children = element.children();
        var span  = angular.element(children[0]);
        var input = angular.element(children[1]);

        //puvodni obsah
        var oldContent;

        //zmenit editaci na text a zavolat akci po editaci
        function send() {
          var newContent = element.text().trim();
          if (newContent !== '') {
            scope.$apply('mode=false');
          }
          if (newContent !== oldContent) {
            scope.action();
          }
        }

        function focus() {
          input[0].focus();
        }

        function blur() {
          send();
        }

        function enter(e) {
          if (e.charCode === KEY_CODE_ENTER) {
            send();
          }
        }

        //ztrata focusu, ulozit zmenu
        input.bind('blur', blur);

        //uzivatel kliknul na enter, ulozit zmenu
        if (enterCommits)
          input.bind('keypress', enter);

        //po kliknuti na text zobrazit input pro editaci
        span.bind('click', function() {
          oldContent = element.text().trim();
          scope.$apply('mode=true');
          focus();
        });
      }
    }
  }
}


/**
 * <div inline model='page.text' action='updateDb()'/>
 */
zdrojak.directive('inline', inlineFactory(true,
    '<span>' +
    '<span ng-hide="mode">{{model}}</span>' +
    '<input type="text" ng-show="mode" ng-model="model" required>' +
    '</span>'));

/**
 * <div inlineblock model='page.text' action='updateDb()'/>
 */
zdrojak.directive('inlineblock', inlineFactory(false,
    '<div>' +
    '<span ng-hide="mode">{{model}}</span>' +
    '<textarea  ng-show="mode" ng-model="model"></textarea>' +
    '</div>'));
