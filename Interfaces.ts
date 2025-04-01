class Car{
    name:string;
    constructor(name:string){
        this.name=name;
    }

    display(){
        console.log(this.name);
    }
}

interface Product{
    name:string,
    price:number,
    brand:string

    display():void
}

let c1=new Car("benz");


// let p1=new Product() throws error interface cannot create objects


let p1: Product={
    name:"Audi",
    price:200000,
    brand:"Famous car",

    display(){
        console.log("display");
    }
}

console.log(p1)