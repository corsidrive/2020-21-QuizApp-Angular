import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  // public service:GameService
  // è la domanda da rappresentare
  public question!:Question
  constructor(
    public service:GameService
  ) { 
    
    this.service.getResponse().subscribe(() => {
      
      this.question = this.service.getCurrentQuestion();
        
    }) 
  }
  ngOnInit(): void {}

  setUserAnswer(clickedUserChoice:string){
    //console.log("sono nel parent",clickedUserChoice);
    this.question.userAnswer = clickedUserChoice
    this.question.isDone = true;
    this.question.isCorrect =  this.question.correct_answer === clickedUserChoice
  }

  goToNextQuestion(){
    console.log("vado avanti");
    this.service.getNextQuestion()
    this.question = this.service.getCurrentQuestion()

  }
  goToPreviusQuestion(){
    
    console.log("vado indietro");
    this.service.getPreviusQuestion()
    this.question = this.service.getCurrentQuestion()
  }

  userAnswerHandler(answer:string){
    console.log("sono fuori dal child",answer);
  }

  getClass(){
    return {'bg-secondary': this.question.isDone}
  }
}
