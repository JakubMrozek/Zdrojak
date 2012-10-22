'use strict';

//uvodni stranka
function IndexIndexCtrl() {}


//seznam vsech stranek
function PagesIndexCtrl($scope, $http) {
    $http.get('/api/pages').success(function(pages){
        $scope.pages = pages;
    });
}


//vytvoreni stranky
function PagesNewCtrl($scope, $http, $location) {
    $scope.page = {};
    $scope.create = function() {
        $http.post('/api/pages', $scope.page).success(function(){
            $location.path('/pages');
        });
    }
}


//detail stranky
function PagesShowCtrl($scope, $http, $routeParams, $location) {
    $http.get('/api/pages/' + $routeParams.page).success(function(page){
        $scope.page = page;
    });
    $scope.remove = function() {
        $http.delete('/api/pages/' + $routeParams.page).success(function(){
            $location.path('/pages');
        });
    }
}


//editace stranky
function PagesEditCtrl($scope, $http, $routeParams, $location) {
    $http.get('/api/pages/' + $routeParams.page).success(function(page){
        $scope.page = page;
    });
    $scope.update = function() {
        $http.put('/api/pages/' + $routeParams.page, $scope.page).success(function(){
            $location.path('/pages');
        });
    }
}