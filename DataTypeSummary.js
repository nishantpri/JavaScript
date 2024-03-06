// primitive 
//7 types: String ,Number ,Boolean, null,undefined ,Symbol,BigInt  

const score=100 // here we do not define type of variable 
const id=Symbol('123');
const newid=Symbol('123');// this will give data type as Symbol
console.log(id);
console.log(newid);
console.log(id==newid);// although the data given to id and newid is same but due to Symbol both are unique hence it will return value as false

const bigNumber=3456789234454656n;
console.log(typeof bigNumber);




// Reference (Non-primitive)
//Array,Objects,Function

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name: "nishant",
    age: 22,
}
const myFunction=function(){
    console.lof("Hello Nishant");
}
console.log(typeof myFunction);// This will return type as function (function onject);
// All reference data type will return it's data type as object