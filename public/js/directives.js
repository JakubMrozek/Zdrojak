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
      count: '=',
      limit: '=',
      current: '=',
      move: '='
    },
    template: '<ul class="pager" ng-show="count > limit">' +
                '<li class="previous"><a>&larr; Předchozí</a></li>' + 
                '<li>Stránka: {{current}}/{{countPages}}</li>' + 
                '<li class="next"><a>Další &rarr;</a></li>' +
              '</ul>',
   link: function(scope, element) {
      var children = element.children();
      var prevLi  = angular.element(children[0]);
      var nextLi  = angular.element(children[2]);
      
      //prechod na predchozi stranku
      prevLi.bind('click', function(){
        if (scope.current <= 1) return; 
        if (scope.current > 1) {
          nextLi.removeClass('disabled');
          scope.current -= 1;    
        }
        disable(prevLi, 1);
        move(); 
      }); 
      
      //prechod na dalsi stranku
      nextLi.bind('click', function(){
        if (scope.current >= scope.countPages) return;
        if (scope.current < scope.countPages) {
          prevLi.removeClass('disabled');
          scope.current += 1;    
        }
        disable(nextLi, scope.countPages);
        move();  
      });

      scope.$watch('count', function(){
        scope.countPages = Math.ceil(scope.count / scope.limit);   
        disable(prevLi, 1);
        disable(nextLi, scope.countPages);
      });
        
      function disable(el, page) {
        if (scope.current === page) {
          el.addClass('disabled');  
        }      
      }
      
      function move() {
        var offset = (scope.current - 1) * scope.limit;
        scope.move(offset, scope.limit);
        scope.$apply();
      }
    }
  }
});