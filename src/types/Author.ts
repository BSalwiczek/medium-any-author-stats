import { Post } from "./Post";

export class Author {
    constructor(
        public readonly id: string,
        public readonly imageUrl: string,
        public readonly name: string,
        public readonly username: string,
        public readonly newsletterSubscribers: number,
        public readonly memberSince: number,
        public readonly followers: number,
        public readonly totalClaps: number,
        public readonly totalResponses: number,
        public readonly totalClappers: number,
        public readonly totalMemberOnlyPosts: number,
        public readonly totalPostsReadingTime: number,
        public readonly posts: Post[],
    ) {}
}