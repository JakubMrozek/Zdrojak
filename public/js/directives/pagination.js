/**
 * Direktiva zobrazi strankovani.
 *
 * Pouziti v sablone:
 *   <pagination page="page" count="count" limit="limit" move="filter"></pagination>
 *
 * Parametry scope:
 *   count - celkovy pocet vysledku
 *   limit - maximalni pocet vysledku na stranku
 *   page - aktualni cislo stranky (nejnizsi je 1)
 *   move - funkce, ktera bude zavolana pri prechodu na dalsi stranku
 */

angular.module('zdrojak.directive').directive('pagination', function pagination() {
  var template =
    '<ul class="pager" ng-show="count > limit">' +
      '<li class="previous"><a>&larr; Předchozí</a></li>' +
      '<li>Stránka: {{page}}/{{countPages}}</li>' +
      '<li class="next"><a>Další &rarr;</a></li>' +
      '</ul>';

  function move(scope) {
    var offset = (scope.page - 1) * scope.limit;
    scope.move(offset, false);
    scope.$apply();
  }

  function disable(scope, el, page) {
    if (scope.page === page) {
      el.addClass('disabled');
    }
  }

  function prev(scope, prevEl, nextEl) {
    if (scope.page <= 1) return;
    if (scope.page > 1) {
      nextEl.removeClass('disabled');
      scope.page -= 1;
    }
    disable(scope, prevEl, 1);
    move(scope);
  }

  function next(scope, prevEl, nextEl) {
    if (scope.page >= scope.countPages) return;
    if (scope.page < scope.countPages) {
      prevEl.removeClass('disabled');
      scope.page += 1;
    }
    disable(scope, nextEl, scope.countPages);
    move(scope);
  }

  var config = {
    restrict: 'E',
    replace: true,
    scope: {
      count: '=',
      limit: '=',
      page: '=',
      move: '='
    },
    template: template,
    link: function(scope, element) {
      var children = element.children();
      var prevLi  = angular.element(children[0]);
      var nextLi  = angular.element(children[2]);

      prevLi.bind('click', function(){
        prev(scope, prevLi, nextLi);
      });

      nextLi.bind('click', function(){
        next(scope, prevLi, nextLi);
      });

      scope.$watch('count', function(){
        scope.countPages = Math.ceil(scope.count / scope.limit);
        disable(scope, prevLi, 1);
        disable(scope, nextLi, scope.countPages);
      });
    }
  }
  return config;
});