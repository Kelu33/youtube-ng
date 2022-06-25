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

  videos: Video[] = this.extractVideos(this.channels);

  types: string[] = [...new Set(this.videos.map( v => v.type))];

  ngOnInit(): void { 
    this.videos = this.shuffleArray(this.videos); 
  }

  onType(type: string): void {
    this.videos = this.extractVideos(this.channels);
    this.videos = this.videos.filter( v => v.type.toLowerCase().includes(type.toLowerCase()));
  }  

  onSearchQuery(query: string): void {
    this.videos = this.extractVideos(this.channels);
    this.videos = this.videos.filter( v => v.title.toLowerCase().includes(query.toLowerCase()));
  }

  onRoute(route: string): void {
    this.videos = this.extractVideos(this.channels);
    this.videos = this.videos.filter( v => v.channel.link.toLowerCase().includes(route.toLowerCase()));
  }

  onHome(): void {
    this.videos = this.shuffleArray(this.extractVideos(this.channels));
  }

  // sortVideo(chars: string): void {    
  //   this.videos = this.extractVideos(this.channels);
  //   this.videos = this.videos.filter( v => v.title.toLowerCase().includes(chars.toLowerCase()));

  // }

  extractVideos(ChannelArray: Channel[]): Video[] {
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
