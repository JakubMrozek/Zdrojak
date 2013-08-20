angular.module('zdrojak.controller').controller('ParameterAddCtrl', ['$scope', '$location', 'api', function ($scope, $location, api) {
  $scope.codebook = [];

  var addValue = function() {
    $scope.codebook.push({value: ''});
  }; 

  addValue();
  addValue();
  addValue();

  $scope.check = function() {
    var last = $scope.codebook[$scope.codebook.length - 1];
    if (last.value !== '') addValue();
  };

  $scope.add = function() {
    var data = {
      name: $scope.name, 
      type: $scope.type, 
      codebook: $scope.codebook
    };
    api.parameter.create(data, function() {
      $location.url('/admin/parameters');
    });
  };

}]);