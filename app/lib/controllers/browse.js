'use strict';

import angular from 'angular/bower-angular'
import RedditApi from '../RedditApi'
import utils from '../utils'

export default function ($scope)  {

    let self = this;
    let api = new RedditApi('/r/EarthPorn');

    self.wallpapers = [];

    api.load()
        //TODO: move it to service
        //TODO: use $q service
        .then(utils.extractUrlsFromPosts)
        .then((urls) => {
            $scope.$apply(() =>
                self.wallpapers.push(...urls)
            );
        })
        .catch(err => console.log('Error: ', err));
}