'use strict';

/* Directives */

/**
 * <inline model='page.text' action='updateDb'/>
 */
zdrojak.directive('inline', function(){
  var KEY_CODE_ENTER = 13;
  return {
    restrict: 'E',
    replace: true,
    scope: {
      action: '=action',
      model: '=model',
      textarea: '@textarea'
    },
    template: 
      '<div>' +
        '<span ng-hide="mode">{{model}}</span>' +
        '<input type="text" ng-show="mode && !textarea" ng-model="model" required>' +
        '<textarea ng-show="mode && textarea" ng-model="model"></textarea>' +
      '</div>',
    link: function(scope, element) {
      var children = element.children();
      var span  = angular.element(children[0]);
      var input = angular.element(children[1]);
      var area  = angular.element(children[2]);
      
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
      
      function focusInput() {
        input[0].focus();    
      }
      
      function focusArea() {
        area[0].focus();    
      }
      
      function focus() {
        scope.textarea ? focusArea(): focusInput();
      }
      
      function blur() {
        if (!scope.mode) return;
        send();      
      }
      
      function enter(e) {
        if (!scope.mode) return;
        if (e.charCode === KEY_CODE_ENTER) {
          send();       
        }  
      }
      
      //ztrata focusu, ulozit zmenu
      input.bind('blur', blur);
      area.bind('blur', blur);
      
      //uzivatel kliknul na enter, ulozit zmenu
      input.bind('keypress', enter);
      
      //po kliknuti na text zobrazit input pro editaci
      span.bind('click', function(){
        oldContent = element.text().trim();
        scope.$apply('mode=true');
        focus();
      });
    }
  }
});
