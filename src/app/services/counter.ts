export class Counter {

    private max:number;
    private min:number;
    private initial:number;

    private value:number;
    constructor(initial = 0,min = 0,max = 0){

        this.value = initial
        this.max = max;
        this.min = min;
        this.initial = initial;

        //if(this.min !== null && this.initial < this.min) {throw new Error('initial è minore di min')}
        //if(this.max !== null && this.initial > this.max) {throw new Error('initial è maggiore di max')}
    }

    getValue() {
        return this.value;
    }
    
    increment(){

        if(this.max === null) {
            this.value++
        }else if(this.value < this.max ){
            this.value++ 
        }
        
    }

    decrement(){
       
        if(this.min === null) {
            this.value--
        }else if(this.value > this.min ){
            this.value-- 
        }
    }
}
