'use strict';

import RedditApi from '../RedditApi'
import utils from '../utils'

export default function ($scope, $routeParams)  {

    let self = this;
    let subreddit = `/r/${$routeParams.subreddit || 'EarthPorn'}`;
    let api = new RedditApi(subreddit);

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