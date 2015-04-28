export default {
  extractUrlsFromPosts: posts => {
      //TODO: Make over_18 filter optional
      return posts
          .filter(post => !post.data.over_18)
          .map(post => post.data.url)
  }
};