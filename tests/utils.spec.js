import utils from '../app/lib/utils'

describe("Unit: utils", () => {

    describe("Unit: extractUrlsFromPosts", () => {

        it("returns an empty array if there are no posts", () => {
            let posts = [];
            let urls = utils.extractUrlsFromPosts(posts);
            expect(urls.length).toBe(0);
        });

        it("returns an empty array if none of the urls is a jpg", () => {
            let posts = [{data: {url: 'http://www.google.com'}}];
            let urls = utils.extractUrlsFromPosts(posts);
            expect(urls.length).toBe(0);
        });

        it("returns an array containing any JPG url for each post", () => {
            let posts = [{data: {url: 'http://www.google.com/image1.jpg'}}];
            let urls = utils.extractUrlsFromPosts(posts);
            expect(urls).toContain('http://www.google.com/image1.jpg');
        });

        it("returns an array containing any JPEG url for each post", () => {
            let posts = [{data: {url: 'http://www.google.com/image1.jpeg'}}];
            let urls = utils.extractUrlsFromPosts(posts);
            expect(urls).toContain('http://www.google.com/image1.jpeg');
        });

        it("filters out any NSFW image from the posts", () => {
            let posts = [{
                data: {
                    over_18: true,
                    url: 'http://www.google.com/image2.jpeg'
                }
            }];
            let urls = utils.extractUrlsFromPosts(posts);
            expect(urls).not.toContain('http://www.google.com/image2.jpeg');
        });

    });

});
