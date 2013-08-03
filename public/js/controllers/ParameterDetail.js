angular.module('zdrojak.controller').controller('ParameterDetailCtrl', ['$scope', '$location', '$routeParams', 'api', function ($scope, $location, $routeParams, api) {
  $scope.parameter = api.parameter.show({id: $routeParams.id});
  $scope.options = [
    {name: 'Číselník', value: 'codebook'},
    {name: 'Hodnota', value: 'value'}
  ];
  $scope.options = {
  	codebook: 'Číselník',
  	value: 'Hodnota'
  };

  $scope.update = function() {
    console.log('ok');
  };
}]);