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

  videos: Video[] = this.channels.map( c => c.videos.filter( v => v.channel = c) ).flat(1);

  types: string[] = [...new Set(this.videos.map( v => v.type))];
}
