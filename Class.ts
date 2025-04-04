
class Product{
    name:string;
    price:any;
    readonly category:string // by enabling readonly we caonnt change the value inside and outside of the class  . It is jst like a const variable

    constructor(name:string,category:string,price:any){
        this.name=name;
        this.price=price;
        this.category=category
    }

    display():void{
        console.log("Product name",this.name,"Price is",this.price);

    }
}


const p1=new Product("samsung","electronics",3999);

console.log(p1);
p1.display();
