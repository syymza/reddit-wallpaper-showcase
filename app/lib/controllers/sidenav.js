'use strict';

export default function ($location, $mdSidenav, Subreddit)  {

    let self = this;

    self.subreddits = Subreddit.list;
    self.getActive = Subreddit.getActive;

    self.goTo = (subreddit) => {
        Subreddit.setActive(subreddit);
        $location.path(`browse/${subreddit}`);
        $mdSidenav('left').toggle();

    }
}
