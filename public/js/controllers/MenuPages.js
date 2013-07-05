angular.module('zdrojak.controller').controller('MenuPagesCtrl', ['$scope', 'api', function($scope, api) {
  $scope.pages = api.page.index({fields: ['name', 'url']});
}]);