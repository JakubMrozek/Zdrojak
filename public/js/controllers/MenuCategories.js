angular.module('zdrojak.controller').controller('MenuCategoriesCtrl', ['$scope', 'api', function($scope, api) {
  $scope.categories = api.category.index();
}]);