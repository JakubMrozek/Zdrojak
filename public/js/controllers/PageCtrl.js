angular.module('zdrojak.controller').controller('PageCtrl', ['$scope', '$routeParams', 'api', function ($scope, $routeParams, api) {
  $scope.page = api.page.show({url: $routeParams.page});
}]);