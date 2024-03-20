//  function SayName(){
//     console.log("N");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("N");
//     console.log("T");
//  }
//  SayName();

// function addTwoNum(num1,num2){
//    console.log(num1+num2);
// }
// addTwoNum(1,3); 

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
//  }
//  const result=addTwoNum(2,3);
//  console.log(result);  // this will print 5 first then it will print undefined  to ovecome this we will do the followinf

// function addTwoNum(num1,num2){
//     return num1+num2;
//  }
//  const result=addTwoNum(3,5);
//  console.log(result);

//  function LogInUser(Username){
//     if(Username===undefined || Username ===""){
//         console.log("Please enter valid UserName")
//         return;
//     }
//     return`${Username} just logged in`
    
//  }
//  console.log(LogInUser("Nishant")) // if we will not pass any argument this  will automatically pass undefined as argument


//  function calCartPrice(...num1){   

//     return num1;
//  }
//  console.log(calCartPrice(2,3,4,5,5));
//  //...is also called rest operator depend upon use  .. this will convert this to an as which we can use futher to sum and all  as required 
 

 const user={
   userName:"Nishant",
   price:199
}
function handleObject(anyobject){// we need to check type safety of object //like chech object is of same type or not

   console.log(`usernamr is ${anyobject.userName} and price is  ${anyobject.price}`);

}
handleObject(user);

// we can also pass
handleObject({
   userName:"Pritam",
   price:200
})
// we can also pass array
const myArr=[2,3,4,56];

function retunSecondVal(getArray){
   return getArray[1];
}
console.log(retunSecondVal(myArr));
