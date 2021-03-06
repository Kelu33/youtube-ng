import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Channel } from 'src/models/channel.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() channels: Channel[] = [];

  @Output() onRouteChange: EventEmitter<string> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
    this.getChannelsSet();    
  }

  sendChannelRoute(route: string): void {
    this.onRouteChange.emit(route);
  }
  
  // Remove duplicates Objects in array :
  // src: https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
  // author: Eydrian
  getChannelsSet(): void {
    this.channels = this.channels.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.name === value.name
      ))
    )
  }
}
