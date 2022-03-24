import { NewsletterV3Dto } from "./NewsletterV3Dto";
import { SocialStatsDto } from "./SocialStatsDto";

export class CreatorDto {
    constructor (
        public readonly id: string,
        public readonly name: string,
        public readonly username: string,
        public readonly imageId: string,
        public readonly mediumMemberAt: number,
        public readonly socialStats: SocialStatsDto,
        public readonly newsletterV3?: NewsletterV3Dto
    ) {}
}