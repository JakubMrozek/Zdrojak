angular.module('zdrojak.directive').directive('messages', function(){
  var template = [
    '<div ng-show="messages" class="alert alert-{{messages.type}}">',
    '<button class="close" ng-click="closeAlertMessage($index)">×</button>',
    '<span ng-repeat="message in messages.message">{{message}}</span>',
    '</div>'
  ].join("\n");

  var config = {
    scope: {},
    restrict: 'E',
    template: template,
    replace: true,
    link: function(scope, element) {

      scope.$on('messages:add', function(event, messages){
        scope.messages = messages;
      });

      scope.$on('messages:reset', function(){
        scope.messages = [];
      });

      scope.closeAlertMessage = function(index) {
        scope.messages = [];
      }
    }
  };

  return config;
});
