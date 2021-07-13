export class Question{

    public isDone:boolean=false;
    public userAnswer!:string;
    public isCorrect:boolean=false;
    public answers:string[] = this.shuffle();



    constructor(
        public category:string,
        public type:string,
        public difficulty:string,
        public question:string,
        public correct_answer:string,
        public incorrect_answers:string[]
    )
    {}

    shuffle(){
        const all = [...this.incorrect_answers,this.correct_answer];
        all.sort(()=>{return Math.random() - 0.5})
        //this.answers = all;
        return all;
    }

   

}