angular.module('zdrojak.controller').controller('ParametersCtrl', ['$scope', 'api', function ($scope, api) {
  $scope.parameters = api.parameter.index();
}]);