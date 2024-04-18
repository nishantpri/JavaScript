// const arr=[1,2,3,4];
// for(let index=0;index<arr.length;index++ ){
//     const element=arr[index];
//     console.log(element);
// }
//While loop 
// Do While Loop
//for of loop
const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
const greeting ="Hello Nishant"
for(const greet of greeting){
    console.log(`Each char is  ${greet}`)
}
//Maps 
const map=new Map()
map.set('In',"India")
map.set('USA',"United states of America")
map.set('fr',"France")

console.log(map);

for(const [key,value] of map){
    console.log(key ,':-' ,value);
}

const myObject={
    'js':'JavaScript',
    'cpp':'c++',
    'rb':'ruby'
}
// to iterate over object we will use for in loop
for(const key in myObject){
    console.log(`${key} is shortCut for ${myObject[key]}`)
} 
const coding =["js","java","cpp","python","swift"]
coding.forEach(function (val){
    console.log(val);
})// here we are giving callBack Function it should be no name  // also we can give function as arrow function
function printMe(item){
    console.log(item);
}
// coding.forEach(printMe);
coding.forEach((item,index,arr)=> {
    console.log(item,index,arr)
})

const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"js"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})
