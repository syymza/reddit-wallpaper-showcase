"use strict";

import angular from 'angular/bower-angular'
import ngMaterial from 'angular/bower-material'
import ngRouter from 'angular/bower-angular-route'
import fontAwesome from 'font-awesome'

import BrowseController from './controllers/browse'
import ToolbarController from './controllers/toolbar'
import SideNaVController from './controllers/sidenav'

import Subreddit from './services/subreddit'

angular
    .module('redditWallpapersApp', ['ngMaterial', 'ngRoute'])
    .config($mdThemingProvider => {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('red');
    })
    .config($routeProvider => { //TODO: Move router to external file
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/browse.html',
                controller: 'BrowseController as browseController'
            })
            .when('/browse/:subreddit?', {
                templateUrl: 'app/views/browse.html',
                controller: 'BrowseController as browseController'
            })
            .otherwise({
                redirectTo: '/' //TODO: Add 404
            });
    })
    .factory("Subreddit", Subreddit)
    .controller("BrowseController", BrowseController)
    .controller("ToolbarController", ToolbarController)
    .controller("SideNaVController", SideNaVController);
