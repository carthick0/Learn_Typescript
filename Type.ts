
// In TypeScript, type is a data type alias that allows you to define a custom name for a set of properties.
//  Instead of repeating the same structure multiple times, you can create a type and reuse it wherever needed.
type Detail={name:string ,marks:number, address?: string}
// //details is kind of like a alias and nickname of 
const result2:Detail={
    name: "karthikeya",
    marks: 839,
    address:"SLO"
}

// adding {name:string ,marks:number, address?: string} again and again it becmae problematic
// we can over come by using alias 


