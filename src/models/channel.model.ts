import { Video } from "./video.model";

export class Channel {
    constructor(
        public name: string,
        public img: string,
        public link: string,
        public videos: Video[]
    ) {}
}
