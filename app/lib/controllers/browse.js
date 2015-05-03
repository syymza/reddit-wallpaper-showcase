'use strict';

import RedditApi from '../RedditApi'
import utils from '../utils'

export default function ($scope, $routeParams, Subreddit)  {

    let self = this;
    let subreddit = Subreddit.getActive();

    //Override default reddit if the url contains one
    if ($routeParams.subreddit) {
        subreddit = $routeParams.subreddit;
        Subreddit.setActive(subreddit);
    }

    let api = new RedditApi(`/r\/${subreddit}`);

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
