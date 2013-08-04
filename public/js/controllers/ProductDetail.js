angular.module('zdrojak.controller').controller('ProductDetailCtrl', ['$scope', '$routeParams', '$location', '$window', 'api', 'uploadFile', function($scope, $routeParams, $location, $window, api, uploadFile) {
  $scope.imgs = [];
  $scope.progress = 0;
  $scope.product = api.product.show({id: $routeParams.id});

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
    success();
  };

  $scope.remove = function() {
    if (!window.confirm('Chcete skutečně produkt smazat?')) return;
    api.product.remove({id: $routeParams.id}, function(){
      $location.url('/admin/products');
    });
  };

}]);