import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Question } from '../model/question';
import { Counter } from './counter';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private counter!: Counter
    private currentQuestion: any

    
    private questions: Array<any> = [];

    private subject = new Subject<any>();

    constructor(private httpClient: HttpClient) {

        this.getResponse()
        
    }

    getCurrentQuestion() {
        return this.currentQuestion
    }

    getNextQuestion() {
        this.counter.increment();
        const currentIndex = this.counter.getValue();
        this.currentQuestion = this.questions[currentIndex];
    }

    getPreviusQuestion() {
        this.counter.decrement();
        const currentIndex = this.counter.getValue();
        this.currentQuestion = this.questions[currentIndex];
    }

    getAnswers() {
        const correct = this.currentQuestion.correct_answer
        const incorrect = this.currentQuestion.incorrect_answers
        const answers = [...incorrect, correct];
    }


    getResponse() {

        // fetch o XMLHttprequest ---> Promessa.then()
        this.httpClient.get('https://opentdb.com/api.php?amount=10&type=multiple')
            // Ottengo i dati
            .subscribe((responseHttp:any) => {
                // trasformo i dati in  Array<Question>
                this.questions = responseHttp.results.map(this.questionFactory)
                // Inizializzo contatore
                this.counter = new Counter(0, 0, this.questions.length)
                // Scelgo la prima domanda
                this.currentQuestion = this.questions[0];
                
                console.log("subscribe", this);

                this.subject.next("gameServiceReady")
                // Il servizio deve comunicare all'applicazione che è pronto
            })
            
            return this.subject.asObservable();
    }

    questionFactory(item:any) {
        const q = new Question(
            item.category,
            item.type,
            item.difficulty,
            item.question,
            item.correct_answer,
            item.incorrect_answers
        );
        return q;
    }
}
