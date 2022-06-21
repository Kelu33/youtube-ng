import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/models/channel.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  
  @Input()
  thumbnail!: string;
  
  @Input()
  title!: string;

  @Input()
  src!: string;

  @Input()
  nbOfViews!: number;

  @Input()
  date!: Date;

  @Input()
  isLive!: boolean;

  @Input()
  channel!: Channel;

  constructor() { }

  ngOnInit(): void {
  }

}
