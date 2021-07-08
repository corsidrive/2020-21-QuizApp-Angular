import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Question } from '../model/questions';

import { Counter } from './counter';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GameService {

  private counter!:Counter
  private currentQuestion!:Question
  private currentIndex!:number;
  private questions:Array<any> = [];

  // message service
  private subject = new Subject<any>();
  private message!:string;


// ---------------------GAME SERVICE-------------------------------  
  constructor(private httpClient:HttpClient) {
        this.getResponse();
}

  getNextQuestion() {
    this.counter.increment();
    this.currentIndex = this.counter.getValue();
    this.currentQuestion = this.questions[this.currentIndex];
  }

  getPreviousQuestion(){
    this.counter.decrement();
    this.currentIndex = this.counter.getValue();
    this.currentQuestion = this.questions[this.currentIndex];
  }

  getQuestions(){
      return this.questions;
  }

  getAnswers(){
    const correct = this.currentQuestion.correct_answer
    const incorrect = this.currentQuestion.incorrect_answers
    const answers = [...incorrect,correct]; 
    return answers;
    
  }

  getCurrentIndex(){
      return this.currentIndex;
  }

  getCurrentQuestion(){
      return this.currentQuestion;
  }


    getPreviusQuestion() {
        this.counter.decrement();
        const currentIndex = this.counter.getValue();
        this.currentQuestion = this.questions[currentIndex];
    }

    // fetch o XMLHttpRequest ----> Promise
    this.httpClient.get('https://opentdb.com/api.php?amount=10')
    // ottengo i dati
    .subscribe((responseHttp:any)=>{
        console.log('getResponse',responseHttp);
        // trasformo i dati
        this.questions = responseHttp.results.map(this.questionFactory)
        // inizializzo contatore
        this.counter = new Counter(0,0,this.questions.length)
        // scelgo la prima domanda
        this.currentIndex = this.counter.getValue();
        this.currentQuestion = this.questions[this.currentIndex];
        // il service deve comunicare all' app che è pronto
        this.message = "Ready!"
        this.sendMessage(this.message)
    }) 
  }

  questionFactory(item:any){
    const q = new Question(
        item.category,
        item.type,
        item.difficulty,
        item.question,
        item.correct_answer,
        item.incorrect_answers
    );
    return q
}
//-------------------MESSAGE SERVICE------------------------------------

sendMessage(message: string) {
    this.subject.next(message);
}

clearMessages() {
    this.subject.next();

}

getMessage(): Observable<any> {
    return this.subject.asObservable();
}

}

