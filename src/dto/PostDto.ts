import { CreatorDto } from './CreatorDto';
import { PostResponsesDto } from './PostResponsesDto';

export class PostDto {
    constructor (
        public readonly title: string,
        public readonly clapCount: number,
        public readonly creator: CreatorDto,
        public readonly postResponses: PostResponsesDto,
        public readonly readingTime: number,
        public readonly voterCount: number,
        public readonly firstPublishedAt: number,
        public readonly visibility: 'LOCKED' | 'PUBLIC'
    ) {}
}