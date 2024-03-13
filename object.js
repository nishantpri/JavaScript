//Singleton->object.create
//object literals
const mySym=Symbol("key1")

const user={
    name:"Nishant",
    [mySym]:"mykey", // correct way to declare symbol data type
    "full name":"Nishant Pritam",// using .dot operator we can not access this object of class 
    age:22,
    location:"chandigarh",
    email:"nishant@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(user.name);
console.log(user["name"]);// this is another way to access object of user class
console.log(user["full name"]);
// Object.freeze(user)// this will freeze user class and this will not allow user to over-write data member of user class

//function->in javascript

user.greeting =function (){
    console.log(`Hello js user ${this["full name"]}`)
}
console.log(user.greeting());

//++++++++++++++++++++++++++++++++++++++Object_Part2+++++++++++++++++++++++++++++++++++++++++++
//singleton or how to create object using constructor
// const tinder=new Object()// this is called singleton object
const tinderUser={}
tinderUser.name="Daksh"
tinderUser.id="1116"
tinderUser.isLoggedIn=false

console.log(tinderUser)

// const newUser={
//     email:"daksh@gmail.com",
//     fullname:{
//         username:{
//             firstname:"nishant",
//             lastname:"pritam"
//         }
//     }
// }
// console.log(newUser.fullname.username.lastname)
const obj1={1:"A",2:"b"}
const obj2={3:"A",4:"b"}
const obj3={...obj1,...obj2} // more easy and simple
// const obj3 = Object.assign({},obj1,obj2) // {}->target,source
console.log(obj3);
const users=[
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:2,
        email:"pritam@gmail.com"
    }
]
console.log(users[1].email)
console.log(Object.keys(tinderUser));// this will give output as Array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('id'));

const course={
    coursenam:"javascript",
    courseprice :"999",
    courseInstructor:"Hitesh"
}

// Example how Object destructuring is done in react 
const {courseInstructor}=course// this will fetch course instructor name and even we can rename the using const{courseInstructor:Instructor}=course // this is also called destructing of object
console.log(courseInstructor); 

const navbar=({company})=>{

}// thus we will have to write all the props.comapany rather doing that we will just write once company in the {} and hence we will not have to write same thing again and again
//jason formator
