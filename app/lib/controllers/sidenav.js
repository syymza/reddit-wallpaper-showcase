'use strict';

export default function ($location, $mdSidenav)  {

    let self = this;

    //TODO: Use subreddit Factory

    self.subreddits = [
        'BeachPorn',
        'EarthPorn',
        'ExposurePorn',
        'ITookAPicture',
        'PhotoCritique',
        'SeaPorn',
        'SkyPorn',
        'SpacePorn',
        'Wallpaper',
        'Wallpapers',
        'WaterPorn'

    ].sort();

    //TODO[BUG]: If I refresh the page this initialization is wrong.
    self.active = self.subreddits[0];

    self.goTo = (subreddit) => {
        self.active = subreddit;
        $location.path(`browse/${subreddit}`);
        $mdSidenav('left').toggle();

    }
}
