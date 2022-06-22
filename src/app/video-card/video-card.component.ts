import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/models/channel.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  
  @Input()
  thumbnail: string = '';
  
  @Input()
  title: string = '';

  @Input()
  src: string = '';

  @Input()
  nbOfViews: number = 0;

  @Input()
  date: Date = new Date();

  @Input()
  isLive: boolean = false;

  @Input()
  channel: Channel = new Channel('','','',[]);  

  thereIs: number | string = 0;

  constructor() { }

  ngOnInit(): void { 
    this.formatThereIs();    
  }

  formatThereIs(): void {
    let days: number = new Date().getTime() - this.date.getTime();
    days = Math.ceil(days / (1000*60*60*24));
    if (days > 365)  {
      days = Math.floor(days/365);
      if (days === 1) this.thereIs = days.toString() + ' year';
      else this.thereIs = days.toString() + ' years';
    }
    else {
      if (days === 1 ) this.thereIs += ' day';
      else this.thereIs += ' days';
    }
  }

}
