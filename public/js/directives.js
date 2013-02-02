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

/**
 * <range change="filter" min="{{params.minPrice}}" max="{{params.maxPrice}}" step="500" model="price">
 */
zdrojak.directive('range', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      max: '@max',
      min: '@min',
      model: '=model',
      change: '=change'
    },
    template: '<input type="range" ng-model="model">',
    link: function(scope, element) {
      var timer;
      element.bind('change', function(){
        if (timer) clearInterval(timer);
        timer = setTimeout(scope.change, 200);
      });   
    }
  }
});

/**
 * <pagination current="current" count="results.count" itemsOnPage="9" next="next" previous="previous"></pagination>
 */
zdrojak.directive('pagination', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      count: '=count',
      limit: '=limit',
      current: '=current',
      nextAction: '=next',
      prevAction: '=prev'
    },
    template: '<ul class="pager">' +
                '<li class="previous"><a>&larr; Předchozí</a></li>' + 
                '<li>Stránka: {{current}}/{{countPages}}</li>' + 
                '<li class="next"><a>Další &rarr;</a></li>' +
              '</ul>',
   link: function(scope, element) {
      var children = element.children();
      var prevLi  = angular.element(children[0]);
      var nextLi  = angular.element(children[2]);
      
      //celkovy pocet stranek
      scope.countPages = Math.ceil(scope.count / scope.limit);
      
      //prechod na predchozi stranku
      prevLi.bind('click', function(){
        if (scope.current > 1) {
          nextLi.removeClass('disabled');
          scope.current -= 1;    
        }
        if (scope.current === 1) {
          prevLi.addClass('disabled');  
        } 
        move(scope.prevAction); 
      });   
      
      //prechod na dalsi stranku
      nextLi.bind('click', function(){
        if (scope.current < scope.countPages) {
          prevLi.removeClass('disabled');
          scope.current += 1;    
        }
        if (scope.current === scope.countPages) {
          nextLi.addClass('disabled');  
        } 
        move(scope.nextAction);  
      });
      
      function move(action) {
        var offset = scope.current * scope.limit - (scope.limit - 1);
        action(offset, scope.limit);
        scope.$apply();
      }
    }
  }
});