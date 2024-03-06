const score=400
const balance=new Number(100);// to dedicated type of a variable if you wish to decidate any data type;
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));


const num=23.8966554
console.log(num);
console.log(num.toPrecision(3));// this will give priority before decimal and it will convert number to string 
const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));//This will convert larger number to indian number format and if we don't write en-IN it will show data as USA number system


//+++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-10));// This will give absolute value
console.log(Math.round(4.6));// this will retrun round value
console.log(Math.ceil(4.6));// This will return ceiling of a number means higher value of a Number
console.log(Math.floor(4.9));//This will return lowest value of a number
console.log(Math.sqrt(4));
console.log(Math.pow(2,3));
console.log(Math.min(4,-1));
console.log(Math.max(4,-1));
console.log((Math.random()*10)+1);
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);// revise




 
