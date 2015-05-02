'use strict';

export default function ($location, $mdSidenav)  {

    let self = this;

    //TODO: Use subreddit Factory
    self.active = 'EarthPorn';

    self.subreddits = ['EarthPorn', 'SeaPorn', 'SkyPorn', 'WaterPorn', 'SpacePorn'];

    self.goTo = (subreddit) => {
        self.active = subreddit;
        $location.path(`browse/${subreddit}`);
        $mdSidenav('left').toggle();

    }
}
