import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  @Input() public list:string[] = []
  @Output() public onSelected:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  userSelect(){
    this.onSelected.emit()
  }
}
