angular.module('zdrojak.controller').controller('ParameterDetailCtrl', ['$scope', '$location', '$routeParams', 'api', function ($scope, $location, $routeParams, api) {
  $scope.codebook = [];

  $scope.parameter = api.parameter.show({id: $routeParams.id}, function(){
  	var codebook = $scope.parameter.values;
  	for (var i = 0; i < codebook.length; ++i) $scope.codebook.push({value: codebook[i]});
    addValue();
  });

  $scope.options = {
  	codebook: 'Číselník',
  	value: 'Hodnota'
  };

  var addValue = function() {
    $scope.codebook.push({value: ''});
  }; 

  $scope.check = function() {
    var last = $scope.codebook[$scope.codebook.length - 1];
    if (last.value !== '') addValue();
  };

  $scope.update = function() {
    var data = { name: $scope.name, type: $scope.type, values: $scope.codebook };
  	api.parameter.update({id: $routeParams.id}, data);
  };

  $scope.remove = function() {
    if (!window.confirm('Chcete skutečně parametr smazat?')) return;
  	api.parameter.remove({id: $routeParams.id}, function(){
      $location.url('/admin/parameters');
    });
  };
}]);