// ES6->

class User{
    constructor(username,email,pass){
        this.username=username,
        this.email=email,
        this.pass=pass;
    }
encryptPassword(){
    return `${this.pass}abc`
}
changeToCapital(){
    return `${this.username.toUpperCase()}`
}
}
const  chai=new User("chai","chai@gamil","1224")
console.log(chai.encryptPassword());
console.log(chai.changeToCapital());

//behind the scene->

// function user(username,email,pass){
//     this.username=username,
//         this.email=email,
//         this.pass=pass;
// }
// user.prototype.encryptPassword=function(){
//     return `${this.username.toUpperCase()}`

// }
// const  tea=new user("tea","chai@gamil","124")
// console.log(tea.encryptPassword());
// // console.log(tea.changeToCapital());
  