export class Counter {

    private max:any;
    private min:any;
    private value:number;

    constructor(value=0,min:any,max:any){

        //this.diventaInt(value,min,max);
        this.value = value;
        this.checkMax(value,max);
        this.checkMin(value,min);
        
        //this.max = (max);
        //this.min = (min);
    }

    getValue(){
        return this.value;
    }

    increment(){
        if(this.max == null){
            this.value++;
        }
        else if(this.value<this.max-1){
            this.value++;
        }

    }

    decrement(){
        if(this.min==null){
            this.value--;
        }
        else if(this.value>this.min){
            this.value--;
        }
    }

    checkMax(value:number,max:any){
        if(max == null){
            this.max = null;
        }
        else if(max != null && max<value){
            this.max = max;
            this.value = (max);
            throw new Error("initial è maggiore di max")
        }
        else{
            this.max = max;
            this.value = (value);
        }
    }

    checkMin(value:number,min:any){
        if(min == null){
            this.min = null;
        }
        else if(min != null && min>value){
            this.min = min;
            this.value = (min)
            throw new Error("initial è minore di min")
        }
        else{
            this.min = min;
            this.value = (value);
        }
    }

    /*diventaInt(value,min,max){
        value = parseInt(value);
        if(min != null){
            min = parseInt(min);
        }
        if(max != null){
            max = parseInt(max);
        }
    }*/
}
