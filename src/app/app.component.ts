import { Component, OnInit } from '@angular/core';

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

  videos: Video[] = this.extractVideosAndSetChannel(this.channels);

  types: string[] = [...new Set(this.videos.map( v => v.type))];

  ngOnInit(): void { 
    this.videos = this.shuffleArray(this.videos); 
  }

  onType(type: string): void {
    this.filterVideos(type, 'type');
    this.videos = this.shuffleArray(this.videos);
  }  

  onSearchQuery(query: string): void {
    this.filterVideos(query, 'title');
  }

  onRoute(route: string): void {
    this.filterVideos(route, 'channel', 'link');
  }

  onHome(): void {
    this.videos = this.shuffleArray(this.extractVideosAndSetChannel(this.channels));
  }

  filterVideos(query: string, target: string, targetAlt: string = ''): void {    
    this.videos = this.extractVideosAndSetChannel(this.channels);
    if (target === 'title' || target === 'type') {
      this.videos = this.videos.filter( v => v[target].toLowerCase().includes(query.toLowerCase()));
    }
    if (target === 'channel' && targetAlt === 'link') {
      this.videos = this.videos.filter( v => v[target][targetAlt].toLowerCase().includes(query.toLowerCase()));
    }
  }

  extractVideosAndSetChannel(ChannelArray: Channel[]): Video[] {
    return ChannelArray.map( c => c.videos.filter( v => v.channel = c) ).flat(1);
  }

  shuffleArray(array: Video[]): Video[] {
    let shuffled: Video[] = [];
    for (let element of array) {
      shuffled.splice(this.getRandomArbitrary(0, shuffled.length + 1), 0, element);
    }
    return shuffled;
  }

  getRandomArbitrary(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
