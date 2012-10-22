'use strict';

angular.module('zdrojak', ['zdrojakServices'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: '/partials/index/index.html', controller: IndexIndexCtrl});
        $routeProvider.when('/pages', {templateUrl: '/partials/pages/index.html', controller: PagesIndexCtrl});
        $routeProvider.when('/pages/new', {templateUrl: '/partials/pages/new.html', controller: PagesNewCtrl});
        $routeProvider.when('/pages/:page', {templateUrl: '/partials/pages/show.html', controller: PagesShowCtrl});
        $routeProvider.when('/pages/:page/edit', {templateUrl: '/partials/pages/edit.html', controller: PagesEditCtrl});
        $routeProvider.otherwise({redirectTo: '/'});
    }])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true)
    }
]);