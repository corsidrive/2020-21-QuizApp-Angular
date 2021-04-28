import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'quiz-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public currentQuestion:any;
  constructor(private gameService:GameService) { 
  }
  
  ngOnInit(): void {
    this.gameService.prepareGame()
    this.currentQuestion = this.gameService.getCurrentQuestion()
    console.log("Game Component - onInit",this.currentQuestion); 
    
  }

  goToNextQuestion(){
    console.log("andiamo alla prossima");
  }

}
