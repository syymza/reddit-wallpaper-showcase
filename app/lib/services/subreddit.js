'use strict';

export default function ()  {

    let active = '';
    let subreddits = [
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

    return {
        list: subreddits,

        getActive: () => {
            return active || subreddits[0];
        },

        setActive: (activeValue) => {
            active = activeValue;
        }
    }
}
