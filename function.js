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

function addTwoNum(num1,num2){
    return num1+num2;
 }
 const result=addTwoNum(3,5);
 console.log(result);

 function LogInUser(Username){
    if(Username===undefined || Username ===""){
        console.log("Please enter valid UserName")
        return;
    }
    return`${Username} just logged in`
    
 }
 console.log(LogInUser("Nishant")) // if we will not pass any argument this  will automatically pass undefined as argument
 
