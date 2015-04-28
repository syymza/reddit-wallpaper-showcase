import jsonp from 'jsonp'

export default class RedditApi {
    constructor() {
        this.redditURL = "http://www.reddit.com";
        this.subreddit = "/r/EarthPorn";
    }

    load() {
        return new Promise((resolve, reject) => {
            let url = `${this.redditURL + this.subreddit}/top.json?sort=top&t=week`;
            jsonp(url, {param: 'jsonp'}, (err, data) => {
                err ? reject(err) : resolve(data.data.children)
            })
        })
    }
}