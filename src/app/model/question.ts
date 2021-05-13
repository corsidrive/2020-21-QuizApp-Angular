export class Question {
    public isDone:boolean=false;
    public userAnswer=''
    public isCorrect:boolean=false;
    public answers:string[] = []

    constructor(
        public category:string = '',
        public type:string,
        public difficulty:string,
        public question:string="",
        public correct_answer:string,
        public incorrect_answers:string[]
    )
    {
        this.shuffle();
    }


    shuffle(){
        const all = [...this.incorrect_answers,this.correct_answer]         
              all.sort(()=> Math.random()  - 0.5 )
        
        this.answers = all;
    }
}

/**
 *  {
             "category": "Entertainment: Video Games",
              "type": "multiple",
              "difficulty": "medium",
              "question": "Who was the first female protagonist in a video game?",
              "correct_answer": "Samus Aran",
              "incorrect_answers": [
                  "Lara Croft",
                  "Alis Landale",
                  "Chell"
              ]
          },
 */