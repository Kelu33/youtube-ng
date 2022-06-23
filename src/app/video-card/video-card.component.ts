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

  thereIs: string = '';

  constructor() { }

  ngOnInit(): void { 
    this.formatThereIs(); 
  }

  formatThereIs(): void {
    let days: number = new Date().getTime() - this.date.getTime();
    days = Math.ceil(days / (1000*60*60*24));
    if (days > 365)  {
      let year: number = Math.floor(days/365);
      if (year === 1) this.thereIs = year.toString() + ' year';
      else this.thereIs = year.toString() + ' years';

    } else {
      if (days === 1 ) this.thereIs = days.toString() + ' day';
      else this.thereIs = days.toString() + ' days';
    }
  }

}
