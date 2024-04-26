let myName="Nishant     "// this will give space as string
console.log(myName.length); 

//now we are creating property of truelength(which will only count only (non space)character as string  )

let hero=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    Spiderman:"Sling",
    

    getSpiderPower:function(){
        console.log(`"spiderman power is ${this.Spiderman}`)
    }
}
Object.prototype.Nishant=function(){
    console.log(`Nishant is present in all object`)
}
heroPower.Nishant();

hero.Nishant();// As Array,function,String will finc the prototype in object hence we can access the  object and can inject the proprty Nishant to oject which can be access by everyone

Array.prototype.heyNishat=function(){
    console.log(`Nishant says hello`);
}
// heroPower.heyNishat()// as we are giving this method to Array we can access this in onject
hero.heyNishat()// we can definetly access here as we are giving this function to the array and can't be shared with all the same layer 



//++++++++++++Inheritence++++++++++++
const user={
    name:"Nishant",
    email:"Nishant@gmail"
}

const teacher={
    makeVideo:true
}

const TeachingSuppot={
    isAvailable:false
}
const TASupport={
    makeAssignment:"jas Assignment",
    fullTime:true,
    __proto__:TeachingSuppot//his TASupport can Access all the prototype of Teaching support
}

teacher.__proto__=user;// we can also access this outside the object and here teacher can access all the property of user and it's also called prototypal inheritence


//Above code is considered to be outDated but the functionality is same  

//Modern code Syntax
Object.setPrototypeOf(TeachingSuppot,teacher)//-> teachingSupport can access all the property Teacher

let anotherUserName="chaiAurcode    "
String.prototype.trueLength=function(){
    console.log(`${this}`)// this will print the String which called trueLength() function 
    console.log(`${this.trim().length}`);
}
anotherUserName.trueLength()
myName.trueLength()



