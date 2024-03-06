let date=new Date()// date is of object type
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toString());

// let CreateDate=new Date(2024,2,6);//
let CreateDate=new Date("06-03-2024");
console.log(CreateDate.toLocaleDateString());


// let myTimeStamp=Date.now();
// console.log(CreateDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate =new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))




