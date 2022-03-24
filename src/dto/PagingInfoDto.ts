import { NextDto } from "./NextDto";

export class PagingInfoDto {
    constructor (
        public readonly next: NextDto
    ) {}
}