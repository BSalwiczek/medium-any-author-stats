import { PagingInfoDto } from "./PagingInfoDto";
import { PostDto } from "./PostDto";

export class HomepagePostsConnectionDto {
    constructor (
        public readonly pagingInfo: PagingInfoDto,
        public readonly posts: PostDto[],
    ) {}
}