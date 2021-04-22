import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  @Input() public title:string = '';
  @Input() public lead:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
