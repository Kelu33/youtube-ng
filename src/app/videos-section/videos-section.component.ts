import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/models/video.model';

@Component({
  selector: 'app-videos-section',
  templateUrl: './videos-section.component.html',
  styleUrls: ['./videos-section.component.css']
})
export class VideosSectionComponent implements OnInit {

  @Input() videos: Video[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
