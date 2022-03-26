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

    get clapsPerPost(): number {
        return this.roundToTwo(this.totalClaps / this.posts.length)
    }

    get clapsPerFollower(): number {
        return this.roundToTwo(this.totalClaps / this.followers);
    }

    get responsesPerPost(): number {
        return this.roundToTwo(this.totalResponses / this.posts.length)
    }

    get responsesPerFollower(): number {
        return this.roundToTwo(this.totalResponses / this.followers);
    }

    get clappersPerPost(): number {
        return this.roundToTwo(this.totalClappers / this.posts.length)
    }

    get clappersPerFollower(): number {
        return this.roundToTwo(this.totalClappers / this.followers);
    }

    private roundToTwo(num: number): number {    
        return Math.round( num * 100 + Number.EPSILON ) / 100
    }
}