angular.module('zdrojak.controller').controller('LayoutsCtrl', ['$scope', 'api', function ($scope, api) {
  $scope.layouts = api.layout.index();
}]);