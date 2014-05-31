'use strict';

var appRoot = angular.module('index', ['ngRoute', 'ngGrid', 'ngResource', 'angularStart.services', 'angularStart.directives']);     //Define the main module

appRoot
    .config(['$routeProvider', function ($routeProvider) {
        //Setup routes to load partial templates from server. TemplateUrl is the location for the server view (Razor .cshtml view)
        $routeProvider
            .when('/home', { templateUrl: '/home/index', controller: 'controllers' })
            //.when('/contact', { templateUrl: '/home/contact', controller: 'ContactController' })
            //.when('/about', { templateUrl: '/home/about', controller: 'AboutController' })
            .when('/demo', { templateUrl: '/home/demo', controller: 'controllers' })
            //.when('/angular', { templateUrl: '/home/angular' })
            .otherwise({ redirectTo: '/home' });
    }])
    .controller('RootController', ['$scope', '$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) {
        $scope.$on('$routeChangeSuccess', function (e, current, previous) {
            $scope.activeViewPath = $location.path();
        });
    }]);
