export class Question {
    
    public isDone = false;
    public isCorrect = false;
    public userAnswer='';

    constructor(
        public category:string = '',
        public type:string = '',
        public difficulty:string = '',
        public question:string = '',
        public incorrect_answers:string[] = [],
        public correct_answers:string, 
        public answers:string[]= [],
    ){
        this.shuffle()
    }

    shuffle(){
        this.answers = [...this.incorrect_answers,this.correct_answers].sort(() => Math.random() - 0.5)
    }
}

/**
 *  "category": "History",
              "type": "multiple",
              "difficulty": "hard",
              "question": "Bohdan Khmelnytsky was which of the following?",
              "correct_answer": "Leader of the Ukrainian Cossacks",
              "incorrect_answers": [
                  "General Secretary of the Communist Party of the USSR",
                  "Prince of Wallachia",
                  "Grand Prince of Novgorod"
              ]
 */
