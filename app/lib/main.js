"use strict";

import angular from 'angular/bower-angular'
import ngMaterial from 'angular/bower-material'
import ngRouter from 'angular/bower-angular-route'
import fontAwesome from 'font-awesome'

import BrowseController from './controllers/browse'
import ToolbarController from './controllers/toolbar'

angular
    .module('redditWallpapersApp', ['ngMaterial', 'ngRoute'])
    .config($mdThemingProvider => {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('red');
    })
    .config($routeProvider => {
        $routeProvider
            .when('/', {
                templateUrl: 'views/browse.html',
                controller: 'BrowseController as browseController'
            })
            .when('/browse/:subreddit?', {
                templateUrl: 'views/browse.html',
                controller: 'BrowseController as browseController'
            })
            .otherwise({
                redirectTo: '/' //TODO: Add 404
            });
    })
    .controller("BrowseController", BrowseController)
    .controller("ToolbarController", ToolbarController);
