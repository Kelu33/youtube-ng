import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() types: string[] = [];

  @Output() onTypeChange: EventEmitter<string> = new EventEmitter();

  @Output() onSearchQueryChange: EventEmitter<string> = new EventEmitter();

  input: string ='';
  
  constructor() { }

  ngOnInit(): void {
  }

  sendType(type: string): void {
    this.onTypeChange.emit(type);
  }

  sendSearchQuery(searchQuery: string): void {
    this.onSearchQueryChange.emit(searchQuery);
  }


}
