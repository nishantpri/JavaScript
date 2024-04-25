// JavaScript and  classes  
// javascript is a prototype-based-language 

//#Object oriented programming 

//## object-> collection of properties and methods 
//component of OOPs
//object literal->means litral object
//constructor
//prototype
//Instances(new,this)
//four pillars->Abstracion || Encapsulation || inheritencce || Polymorphism


//now stareting with object litral
// const user={
//     username:"Nishant",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails: function(){
//         //console.log("Got user Details from Database")
//         // console.log(`Username: ${this.username}`)
//         console.log(this);// this will  show the current context of the user 
//      }
// }
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);// if we print here this will print empty as there is nothing in global context

// const date =new Date();//-> using this new keywords we can create multiple instance of any onject

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    // return this//->passing the object-> this is already defined as so if we will not write this it will automatically return this
}

const user1=new User("Nishant",12,false);
const user2=new User("chai or code",11,true);
console.log(user1);
console.log(user2);

//new keyword-> using this new keyword will create new instance of the object if we will not create new instance it will over-write the next value in current istance only that will mess up with whole code




//instanceof->he instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. 
// The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.