"use strict";

import angular from 'angular/bower-angular'
import ngMaterial from 'angular/bower-material'
import ngRouter from 'angular/bower-angular-route'

import BrowseController from './controllers/browse'


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
    })
    .controller("BrowseController", BrowseController);
