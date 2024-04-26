function setUsername(username){
    //complex db calls
    this.username=username
}
function createUser(username,email,password){
    setUsername.call(this,username)// here no call is made(i.e which means it will not hold any refferenece ) as this is not accessable that's why we need to manually call this using .call ->it will only call but not hold any refference hence we need to pass own refference  to hold data in own function
    // using call  we can pass current execution context to some other function
    this.email=email,
    this.password=password
}
const chai =new createUser("chai","chai@gmail","123");
console.log(chai);