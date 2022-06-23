import { Component } from '@angular/core';

import { CHANNELS } from './channels-list';
import { Channel } from 'src/models/channel.model';
import { Video } from 'src/models/video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  channels: Channel[] = CHANNELS;

  videos: Video[] = this.extractVideos(this.channels);

  types: string[] = [...new Set(this.videos.map( v => v.type))];

  onType($event: string): void {
    this.videos = this.extractVideos(this.channels);
    this.videos = this.videos.filter( v => v.type.toLowerCase().includes($event.toLowerCase()));
  }  

  onSearchQuery($event: string): void {
    this.videos = this.extractVideos(this.channels);
    this.videos = this.videos.filter( v => v.title.toLowerCase().includes($event.toLowerCase()));
  }

  extractVideos(ChannelArray: Channel[]): Video[] {
    return ChannelArray.map( c => c.videos.filter( v => v.channel = c) ).flat(1);
  }
}
