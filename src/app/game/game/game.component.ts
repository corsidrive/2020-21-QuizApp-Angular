import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public question:Question = new Question('','','','',[],''); 
  constructor(public service:GameService) { }
  
  ngOnInit(): void {
    console.log(this.service.getCurrentQuestion())
    this.question = this.service.getCurrentQuestion()
  }

  onNextQuestion(){
    this.question = this.service.getNextQuestions()
  }
}
