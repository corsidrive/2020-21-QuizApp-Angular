import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/model/questions';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

@Input() public questions!:Array<Question>;
public isCorrectCount:number = 0;
public isHidden:Boolean=true;

  constructor() { }



  ngOnInit(): void {
  }

  getResult(){
    for(var question of this.questions){
        this.isCorrectCount += question.isCorrect ? 1 : 0
        console.log(this.isCorrectCount)
    }
    this.isHidden=false;
    console.log(this.isHidden)
  }

}


