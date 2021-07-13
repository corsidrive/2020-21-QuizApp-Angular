import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/model/questions';

@Component({
  selector: 'app-question-space',
  templateUrl: './question-space.component.html',
  styleUrls: ['./question-space.component.css']
})
export class QuestionSpaceComponent implements OnInit {
@Input() public question!:Question
  constructor() { }

  ngOnInit(): void {
  }

  getColor():string{
    switch (this.question.difficulty) {
      case "hard":
        return "red"
      
    case "medium":
      return "orange"
    
      case "easy":
        return "green"
      default:
        return "black";
    }
  }
}
