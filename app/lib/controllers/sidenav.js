'use strict';

export default function ($location, $mdSidenav)  {

    let self = this;

    //TODO: Use subreddit Factory
    //TODO[BUG]: If I refresh the page this initialization is wrong.
    self.active = 'EarthPorn';

    self.subreddits = ['EarthPorn', 'SeaPorn', 'SkyPorn', 'WaterPorn', 'SpacePorn'];

    self.goTo = (subreddit) => {
        self.active = subreddit;
        $location.path(`browse/${subreddit}`);
        $mdSidenav('left').toggle();

    }
}
