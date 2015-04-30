import RedditApi from './RedditApi'
import utils from './utils'

let api = new RedditApi('/r/EarthPorn');

api.load()
    .then(utils.extractUrlsFromPosts)
    .then(utils.injectImages)
    .catch(err => console.log('Error: ', err));
