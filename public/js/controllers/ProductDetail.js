angular.module('zdrojak.controller').controller('ProductDetailCtrl', ['$scope', '$routeParams', '$location', '$window', '$q', 'api', 'uploadFile', function($scope, $routeParams, $location, $window, $q, api, uploadFile) {

  var productLoaded = false;
  var paramsLoaded = false;

  var addParamsToProduct = function() {
    if (!productLoaded || !paramsLoaded) return;
    $scope.product.parameters.forEach(function(param, key){
      for (var i = 0; i < $scope.parameters.length; ++i) {
        var parameter = $scope.parameters[i];
        if (parameter.id == param.id) {
          $scope.product.parameters[key].type = parameter.type;
          if (parameter.type == 'codebook') {
            var checkedVals = $scope.product.parameters[key].values;
            var values = {};
            for (var v in parameter.values) {
              values[parameter.values[v]] = false;
              checkedVals.forEach(function(val){
                if (parameter.values[v].toLowerCase() == val.toLowerCase()) {
                  values[parameter.values[v]] = true;
                }
              });
            }
            $scope.product.parameters[key].values = values;
          }
        }
      }
    });
  };

  $scope.select = function() {
    console.log(arguments);
  }

  $scope.imgs = [];
  $scope.progress = 0;
  $scope.product = api.product.show({id: $routeParams.id}, function(){
    productLoaded = true;
    addParamsToProduct();
  });
  $scope.parameters = api.parameter.index(function(){
    paramsLoaded = true;
    addParamsToProduct();
  });


  var error = function() {
    $scope.$apply(function(){
      $scope.pbar = false;
    });
  }

  var cancel = function() {
    $scope.$apply(function(){
      $scope.pbar = false;
    });
  }

  var complete = function() {
    $scope.$apply(function(){
      $scope.file.value = '';
      $scope.pbar = false;
    });
  }

  var progress = function(evt) {
    $scope.$apply(function(){
      if (evt.lengthComputable) {
        $scope.progress = Math.round(evt.loaded * 100 / evt.total)
      }
    })
  }

  $scope.upload = function(element) {
    $scope.file = element;
    var upload = uploadFile();
    upload.setFiles($scope.file.files);
    for (var i = 0; i < $scope.file.files.length; ++i) {
      var src = $window.URL.createObjectURL($scope.file.files[i]);
      $scope.imgs.push(src);
    }

    $scope.pbar = true;
    api.product.upload({id: $routeParams.id, upload: upload}, complete, error, cancel, progress);
  };

  $scope.update = function(el, inline, success, error) {
    if (success) success();
  };

  $scope.remove = function() {
    if (!window.confirm('Chcete skutečně produkt smazat?')) return;
    api.product.remove({id: $routeParams.id}, function(){
      $location.url('/admin/products');
    });
  };

}]);