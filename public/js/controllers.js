'use strict';

//uvodni stranka
function IndexIndexCtrl() {}


//seznam vsech stranek
function PagesIndexCtrl($scope, Page) {
    $scope.pages = Page.index();
}


//vytvoreni stranky
function PagesNewCtrl($scope, $location, Page) {
    $scope.page = {};
    $scope.create = function() {
        Page.create($scope.page, function(){
            $location.path('/pages');
        });
    }
}


//detail stranky
function PagesShowCtrl($scope, $routeParams, $location, Page) {
    $scope.page = Page.show({page: $routeParams.page});
    $scope.remove = function() {
        Page.remove({page: $routeParams.page}, function(){
            $location.path('/pages');
        });
    }
}


//editace stranky
function PagesEditCtrl($scope, $routeParams, $location, Page) {
    $scope.page = Page.show({page: $routeParams.page});
    $scope.update = function() {
        Page.update({page: $routeParams.page}, $scope.page, function(){
            $location.path('/pages');
        });
    }
}