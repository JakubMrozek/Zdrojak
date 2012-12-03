'use strict';

//uvodni stranka
function IndexIndexCtrl() {}


//seznam vsech stranek
function PagesIndexCtrl($scope, page) {
  $scope.pages = page.index();
}


//vytvoreni stranky
function PagesNewCtrl($scope, $location, page) {
  $scope.page = {};
  $scope.create = function() {
    page.create($scope.page, function(){
      $location.path('/pages');
    });
  }
}


//detail stranky
function PagesShowCtrl($scope, $routeParams, $location, page) {
  $scope.page = page.show({page: $routeParams.page});
  
  //editace stranky
  $scope.update = function() {
    page.update({page: $routeParams.page}, $scope.page);  
  }
  
  //smazani stranky
  $scope.remove = function() {
    page.remove({page: $routeParams.page}, function(){
      $location.path('/pages');
    });
  }
}
