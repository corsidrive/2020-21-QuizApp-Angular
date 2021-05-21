import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Question } from '../model/questions';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy{

  public question!:Question;
  private messages:any[] = []
  private sub:Subscription
  constructor(
    public service:GameService
    ) {
        this.sub = this.service.getMessage().subscribe(message=>{
          if(message){
            console.log(message)
            this.messages.push(message)
            this.question = this.service.getCurrentQuestion();
          }
          else{
            this.messages = []
          }  
        });
        
    }

    goNextQuestion(){
        this.service.getNextQuestion()
        this.question = this.service.getCurrentQuestion()
    }

    goPreviousQuestion(){
      this.service.getPreviousQuestion()
      this.question = this.service.getCurrentQuestion()
    }


  setUserAnswer(clickedUserChoice:string){
    console.log("ciao",clickedUserChoice)
    this.question.userAnswer = clickedUserChoice
    this.question.isDone = true
    this.question.isCorrect = this.question.correct_answer === clickedUserChoice
  }

  ngOnInit(): void {
   
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

}
