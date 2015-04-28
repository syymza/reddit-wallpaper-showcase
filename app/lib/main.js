import RedditApi from './RedditApi'
import utils from './utils'


let api = new RedditApi();

api.load()
    .then(posts => utils.extractUrlsFromPosts(posts))
    .then(urls => console.log(urls))
    .catch(err => console.log('Error: ',err));