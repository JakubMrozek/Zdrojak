angular.module('zdrojak.controller').controller('MenuSearchCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.search = function() {
    $location.url('/vyhledavani/' + $scope.query);
  }
}]);