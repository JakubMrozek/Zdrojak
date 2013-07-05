angular.module('zdrojak.controller').controller('CategoryCtrl', ['$scope', '$routeParams', '$location', 'urlFilter', 'api', function ($scope, $routeParams, $location, urlFilter, api) {
  var query = {};
  var ps = urlFilter({limit: 10, orderColumns: ['price', '-price']});

  $scope.category = api.category.show({url: $routeParams.category}, function(){
    $scope.category.params.forEach(function(param){
      var filterParam = ps.getFilterParam(param.code);
      if (!Array.isArray(filterParam)) return;
      param.values.forEach(function(value){
        if(~filterParam.indexOf(value.code)) value.checked = true;
      });
    });
    $scope.price = ps.getFilterParamAsString('price', $scope.category.maxPrice);
    $scope.order = ps.getOrder();
    $scope.limit = ps.getLimit();
    $scope.page  = ps.getPage();
    $scope.load(ps.getOffset(), false);
  });

  //nahraje produkty dle nastaveni formulare a zmeni URL podle nastaveni formulare.
  $scope.filter = function(offset, reset) {
    reset = angular.isDefined(reset) ? reset : true;
    $scope.load(offset, reset);
    $location.search({
      filter: query.filter, order: query.order,
      offset: query.offset, limit: query.limit
    });
  };

  //nahraje produkty podle nastaveni formulare.
  $scope.load = function(offset, reset) {
    query.filter = $scope.serialize();
    query.category = $routeParams.category;
    query.order   = $scope.order;
    query.offset = offset || 0;
    query.limit  = $scope.limit;
    $scope.results = api.product.index(query, function(){
      if (reset) $scope.page = 1;
    });
  };

  //serializuje formular (rojde vsechny hodnoty ve formulare a prevede je na retezec).
  $scope.serialize = function() {
    var values = [];
    $scope.category.params.forEach(function(param){
      var vals = [];
      param.values.forEach(function(value){
        if (value.checked) vals.push(value.code);
      });
      if (vals.length > 0){
        values.push(param.code + ':' + vals.join(','));
      }
    });
    values.push('price:' + $scope.price);
    return values.join('@');
  };
}]);