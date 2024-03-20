
let a=300;
//{}called scope->
if(true){
    let a=10;
const b=20;
console.log(a);
}
console.log(a);
// console.log(b);
// scope of var is out side of if that's why we dont use var 


// function one(){
//     const user="Nishant"
//     function two(){
//         const webSite="youtube.com"
//         console.log(user);
    
//     }
//     // console.log(webSite);
//     two();

// }
// one();

if(true){
    const username="Nishant"
    if(username === "Nishant"){
        const web="youtube"
    console.log(username+web)

    }
    // console.log(web);//we can nit access outer scope variable

}
// console.log(username);


//++++++++++++++++++++++++++Intresting++++++++++++++++++++++
console.log(addone(5));

function addone(val){
    return val+1;
}
addtwo(5);  // in the above function we can call function above function and we can not do the same in the second function -if we will store a funtion this is also call mini hoisting,hence we need to call function after declaration of function

const addtwo=function(val){
    return val+2;

}

