class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
} 
class Teacher extends user{// this will inherit all the property of user
  constructor(username,email,password){
    super(username) ,// this will automaclly this.user to Teacher -> with Super keyword
    this.email=email,
    this.password=password;
  }

  addCourse(){
    console.log(`A new course was added by  ${this.username}`)
  }
}

const chai = new Teacher("chai","chai@emailTeacher","123")
chai.addCourse("javascript");

const masalachai=new user("masalachai");
// masalachai.addCourse();// child can  not access by the parent
masalachai.logMe();

console.log(chai===masalachai);
console.log(chai instanceof Teacher);
console.log(chai instanceof user)
