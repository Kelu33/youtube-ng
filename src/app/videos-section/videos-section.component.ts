import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from 'src/models/video.model';

@Component({
  selector: 'app-videos-section',
  templateUrl: './videos-section.component.html',
  styleUrls: ['./videos-section.component.css']
})
export class VideosSectionComponent implements OnInit {

  @Output() onRouteChange: EventEmitter<string> = new EventEmitter();

  @Input() videos: Video[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }  

  onRoute(route: string): void {
    this.onRouteChange.emit(route);
  }

}
