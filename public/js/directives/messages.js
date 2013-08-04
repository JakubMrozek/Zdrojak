
/**
 * Zobrazeni chybovych a oznamovacich hlasek.
 */

angular.module('zdrojak.directive').directive('messages', ['$rootScope', 'flash', function($rootScope, flash){
  var template = [
    '<p class="alert alert-{{messages.type}}" ng-repeat="message in messages.message">',
    '{{message}}',
    '</p>'
  ].join("\n");

  var config = {
    scope: {},
    restrict: 'E',
    template: template,
    replace: true,
    link: function(scope, element) {
      $rootScope.$on('flashMessages:add', function(event, messages){
        scope.messages = messages;
      });
      
      $rootScope.$on('flashMessages:reset', function(){
        scope.messages = [];
      });
    }
  };

  return config;
}]);