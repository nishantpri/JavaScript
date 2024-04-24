// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// creating promises
// const promisOne=new Promise(function(resolve,reject){
//     //DO an Async task
//     //DB calls.Cryptographu ,network
//     setTimeout(function(){
//         console.log(`Async task is complete`)
//         resolve();
//     },1000)
// })

// promisOne.then(function(){
//     console.log(`promise consumed`)
// })

// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log(`Async task two`);
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("Async two resolved");
// })

// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"Nishant",email:"nishant@google.com"})
//     },1000)
// })

// promiseThree.then((item)=>{
//     console.log(item);
// })


// const promisefour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
    //     let error=false
    //     if(!error){
    //         resolve({username:"Nishant",pass:"1234"})
    //     }
    //     else{
    //         reject('ERROR:Something went wrong')
    //     }
    // },1000)

// })
// promisefour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(err){
//     console.log(err);
// }).finally(()=>{
//     console.log("Finally promise is either resolved or rejected")
// })


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"JavaScript",pass:"123"})
//         }
//         else{
//             reject("Error Detected");
//         }
//     },1)
// })

// async function consumepromiseFive(){
//     try{
//     const response=await promiseFive
//     console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }
// consumepromiseFive();

// async function getAllUsers(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json()
//     console.log(data);
//     }
//     catch{
//         console.log("Error");
//     }
// }
// getAllUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{ // to handle above returned response from response.json
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })




