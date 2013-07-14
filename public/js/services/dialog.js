angular.module('zdrojak.service').factory('dialog', [function(){
  return function(scope, openDialogCallback, closeDialogCallback) {
    openDialogCallback  = openDialogCallback  || function() {};
    closeDialogCallback = closeDialogCallback || function() {};

    var dialogFullName = function(dialogName) {
      return dialogName + 'IsOpen';
    };

    scope.open = function(dialog, index) {
      scope[dialogFullName(dialog)] = true;
      openDialogCallback(index);
    };
    scope.close = function(dialog) {
      scope[dialogFullName(dialog)] = false;
      closeDialogCallback();
    };
  }
}]);