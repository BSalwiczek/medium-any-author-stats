import { HomepagePostsConnectionDto } from "../dto/HomepagePostsConnectionDto";
import { PostDto } from "../dto/PostDto";
import { Author } from "../types/Author";
import { Post } from "../types/Post";
import { PostsToAuthorDataMapper } from "./PostsToAuthorDataMapper";

export class MediumAuthorDataService {
    private readonly MAX_MEDIUM_PAGINATION_LIMIT = 25;
    private readonly MAX_POSTS_CALLS = 100;
    private readonly MEDIUM_URL = "https://medium.com/_/graphql";

    async fetchAuthorData(setPostsLoaded: Function): Promise<Author | null> {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            return new Author(
                "121312",
                "https://miro.medium.com/fit/c/176/176/1*nguBSHdpmneK9MYsFuBbzw.jpeg",
                "Bartosz Salwiczek",
                "bsalwiczek",
                10,
                0,
                315,
                123,
                20,
                40,
                5,
                50,
                [
                    new Post("title1", 12, 3, 1, 1647210965068),
                    new Post("title2", 17, 90, 3, 1647210975068), 
                    new Post("title3", 21, 44, 1, 1647211065068), 
                    new Post("title4", 33, 32, 10, 1647210969068), 
                    new Post("title5", 88, 300, 7, 1647310995068)
                ]
            );
        }
        const posts = await this.getAllPosts(setPostsLoaded);
        if (posts.length === 0) return null;
        const mapper = new PostsToAuthorDataMapper();
        return mapper.map(posts);
    }

    async getAllPosts(setPostsLoaded: Function): Promise<PostDto[]> {
        let startFromPost;
        let iter = 0;
        let posts: PostDto[] = [];
        do {
            iter += 1;
            const homepagePostsConnectionDto: HomepagePostsConnectionDto = await this.getPostsPage(startFromPost);
            posts = posts.concat(homepagePostsConnectionDto.posts);
            setPostsLoaded(posts.length);
            startFromPost = homepagePostsConnectionDto.pagingInfo?.next?.from;
        } while(startFromPost != null && this.MAX_POSTS_CALLS > iter);

        return posts;
    }
    
    async getPostsPage(startFromPost?: string): Promise<HomepagePostsConnectionDto> {
        return new Promise<HomepagePostsConnectionDto>((resolve, reject) => {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                if(tabs.length === 0) reject("No tabs!");
                chrome.tabs.sendMessage(tabs[0].id!, {
                    startFromPost, 
                    maxPaginationLimit: this.MAX_MEDIUM_PAGINATION_LIMIT,
                    url: this.MEDIUM_URL
                }, 
                (response) => {
                    if(!response) {
                        reject("Something went wrong!");
                    }
                    resolve(response[0].data.userResult.homepagePostsConnection as HomepagePostsConnectionDto)
                });
            });
        });
    }
}