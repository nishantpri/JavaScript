//Prototype=>Prototypes are the mechanism by which JavaScript objects inherit features from one another
// javascript is a prototypal behaviour
//suppose if we are  asking for something from javascript it will keep searching from children to parent to grandparent which is only called prototype inheritence
// it will stop at ->  
//prototype of object & string  is null

function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power=2;
console.log(multiplyBy5(5));// this will give 25
console.log(multiplyBy5.power=2);// almost eveything in javascript is object hence we can acess through(.)and this will return as 2
console.log(multiplyBy5.prototype);//by Deafult context of prototype method it store current refference of oject

function createUser(username,score){
    this.username=username;
    this.score=score;
}

// we can also inject own prototype in into any object 

createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printme=function(){
    console.log(`price is:${this.score}`)
}
const chai= new createUser("chai",20);
const tea= new createUser("tea",250);
console.log(chai.printme());// this will give can not read properties of undefined(printme); // here we need to define chai about the  additional  properties

//Notes:-Here is what happend behind the scene when the new keyword is used 

// A new object is created:The new keywords initiates the creation of a new javascript object

//A prototype is linked :the newly created object gets linked to the prototype of the constructor function
//this means that it has access to properties and method defined  on the constructor's prototype.

//The constructor is called:The constructor function is called with the specified arguments and  this is bound to the newly created object.
//if no explicit return value is specified from the constructor,Javascript assumes this,the newly created object ,to be the inteded return value.

//The new Object is returned :After the constructor function has been called .if it doesn't return a non-primitive value
//(object,array,function,etc.)the newly created object  is returned

