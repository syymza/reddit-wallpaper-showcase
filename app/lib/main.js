import RedditApi from './RedditApi'
import utils from './utils'
import angular from 'angular/bower-angular'
import material from 'angular/bower-material'

angular
    .module('redditWallpapersApp', ['ngMaterial'])
    .config($mdThemingProvider => {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('red');
    });

let api = new RedditApi('/r/EarthPorn');

api.load()
    .then(utils.extractUrlsFromPosts)
    .then(utils.injectImages)
    .catch(err => console.log('Error: ', err));
