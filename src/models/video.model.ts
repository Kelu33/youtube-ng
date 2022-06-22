import { Channel } from "./channel.model";

export class Video {
    constructor(
        public thumbnail: string,
        public title: string,
        public src: string,
        public nbOfViews: number,
        public date: Date,
        public isLive: boolean,
        public type: string,
        public channel: Channel = new Channel('','','',[])
    ) {}
}