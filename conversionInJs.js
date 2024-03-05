let score= "33" // here we can clearly say this is an Integer type
// const{score2}=req.body // here we request data from body we can not predict which type of  is used
console.log(typeof score);

let valInNum =Number(score); // This is type Conversion here we are Conversing String score to Number
console.log(typeof valInNum); // this will give type of as number but this is not actually type of  Number
console.log(valInNum);// this will give out as NaN which means Not a Number 
// if we will assign null to any variable it will give 0 as output and if we will give undefined to any variable it will give also NaN(Not a Number and It's type is Number)

// "33"=>33
//"33abc"=>NaN
//true=>1;false=>0;

let isLogged="hit";
let booleanIsLogged=Boolean(isLogged);
console.log(booleanIsLogged);// if we will give 0 or empty string this will give output as false and if we will give 1 or non-empty string it will give output as true 

let num= 964;
let stringnum=String(num);
console.log(typeof stringnum); // this will convert number to string.
