class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username:${this.username}`);
    }

     static createId(){// static will not give access to everyone as we don't want to give creteId to all
        return `123`
    }
}
const nishant=new user("Nishant");
// console.log(nishant.createId());


class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const phone= new Teacher("phone","iphone@apple")
phone.logme();
console.log(phone.createId());

//static-> will not  let access the child as well as who is inheriting that class it will not allow to access the static method and class 