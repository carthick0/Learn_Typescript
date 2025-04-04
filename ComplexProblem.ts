let  schoolName:"DPS"|"DAV" = "DPS"

let another:string="kV";

another=schoolName;

// schoolName=another; error why? one type will allocted to another if both of them are same or one is the sub set of another
console.log(another)



type Complex={
    real:number,
    img:number,
   
    add:(c:Complex)=>Complex

}
interface IComplex{
    real:number,
    img:number
    
    
    add:(c:IComplex)=>IComplex
}

let c1:Complex={
    real:10,
    img:10,
   
    add:(c:Complex)=>{return c}
    
}

let c2:IComplex={
    real:199,
    img:200,
   
   
    add:(c:IComplex)=>{return c}
}

c1=c2;
console.log(c1);
