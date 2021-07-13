import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  
  @Input() public list:string[] = []
  @Output() public onSelected:EventEmitter<any> = new EventEmitter();
  @Input() public itemSelected:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler(answer:string){
    this.itemSelected = answer
    this.onSelected.emit(answer)
  }

  getActiveClass(item:string){
    return { active : this.itemSelected == item }
  }
}
