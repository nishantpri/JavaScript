//Stack(used by all primitive data type)// this will give you copy of  variable
let myName="Nishant";
let anotherName=myName;
anotherName="library"// this will not change the original value as it passes only copy ,

console.log(anotherName);
console.log(myName);




// Heap(used by all Non-primitive data Type)// this will give you reference

let user1={
    email:"user@gamil.com",
    phone: 909084849
}// this will pass reference so if we will change value as one place it will also change in original as we changed into reference

let user2=user1;
user2.email="nishant@gmail.com";
console.log(user1.email);
console.log(user2.email);
