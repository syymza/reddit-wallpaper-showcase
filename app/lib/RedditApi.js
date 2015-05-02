import jsonp from 'jsonp'

export default class RedditApi {
    constructor(subreddit) {
        this.redditURL = 'http://www.reddit.com';
        this.subreddit = subreddit;
    }

    load() {
        return new Promise((resolve, reject) => {
            let url = `${this.redditURL + this.subreddit}/top.json?sort=top&t=week&limit=20`;
            jsonp(url, {param: 'jsonp'}, (err, data) => {
                err ? reject(err) : resolve(data.data.children)
            })
        })
    }
}
