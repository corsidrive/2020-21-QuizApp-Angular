import { Component, OnInit } from '@angular/core';
import { Question } from '../model/questions';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public question:Question;
  constructor(
    public service:GameService
    ) {
        this.question = this.service.getCurrentQuestion();
    }

    goNextQuestion(){
        this.service.getNextQuestion()
        this.question = this.service.getCurrentQuestion()
    }

    goPreviousQuestion(){
      this.service.getPreviousQuestion()
      this.question = this.service.getCurrentQuestion()
    }

  ngOnInit(): void {
  }

}
