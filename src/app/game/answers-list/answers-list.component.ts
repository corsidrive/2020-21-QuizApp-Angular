import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {
  @Input() public list:string[] = []
  @Output() public onUserAnswer:EventEmitter<string> = new EventEmitter();

  @Input() public selected:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler(answer:string){
    console.log("sono dentro il componente (child)",answer);
    //this.selected = answer
    this.onUserAnswer.emit(answer);
  }

  isActive(currentAnswer:string) {
    return {active: this.selected === currentAnswer}
  }

}
