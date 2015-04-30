export default {
    extractUrlsFromPosts: posts => {
        //TODO: Make over_18 filter optional
        return posts
            .filter(post => !post.data.over_18)
            .map(post => post.data.url)
            .filter(url => /jpe?g$/.exec(url))
    },

    injectImages: urls => {
        //TODO: Start to use templates
        let id = '#wallpapers';
        let elem = document.querySelector(id);
        elem.innerHTML = urls.map(url => `<img src="${url}">`).join('\n')
    }
};
