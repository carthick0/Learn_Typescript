
//"Generic" doesn't mean just writing types — it means writing flexible,
// reusable functions or classes that can work with any type, while still keeping type safety.

//generic function
function linearSearch<T>(array:T[],x:T):[number,T]{
    for(let i=0;i < array.length ;i++){
        if(array[i]==x) return [i,array[i]];
    }
    return [-1,x]
}
const array:number[]=[1,2,3,5,6];
console.log(linearSearch<number>(array,3));

 
//generic class
class Stack<T>{

    private array:T[];

    constructor(){
        this.array=[];
    }

    push(x:T):void{
        this.array.push(x);
    }
    pop():void{
        this.array.pop();
    }
    top():T{
        return this.array[this.array.length-1];
    }
    
    display():void{
        console.log(this.array);
    }

}

const st=new Stack<string>();

st.push("abc");
st.push("def");
st.push("ghf");

st.display();

st.pop();

st.display();

st.top();
st.display();


//generic interface

interface customInterface<T1,T2>{
    property:T1,
    moreProperty:T2
}

const obj : customInterface<string,number>={
    property:"karthikeya",
    moreProperty:20
}
console.log(obj) 