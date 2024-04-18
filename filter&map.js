// const coding=["js","ruby","python","java","cpp"]
// //for each loop doest not return any value we can only acceess object through this as we can see in below  example variable result will give undefined as answer
// const result=coding.forEach((item)=>{
// console.log(item);
// })
// console.log(result)

// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNum.filter((num)=> num> 4)//it will result a new Array with the num greater than 4 in Array
// console.log(newNum);

// const newN=[]// we can also filter Array using For-Each loop
// myNum.forEach((num)=>{
//     if(num>4){
//         newN.push(num)
//     }
// })
// console.log(newN);
// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const NN=myNum.map((num)=>num+10);// it returns automatically hence we dont need to return untill we dont open any scope 
// console.log(NN);

// const res=[]
// myNum.forEach((num)=>{
//     res.push(num+20);
// })
// console.log(res)

// //chaining Method 
// //chaining means we can use multiple of filter and map method as shown below
// const newNums=myNum.map((num)=>num*10).map((num)=>num+1).filter((nums)=>nums>30)
// console.log(newNums);

// ##reduce method

const Array=[1,2,3]
// const myTotal=Array.reduce(function(acc,curr){
//     console.log(`Accumulator ${acc}  and current ${curr}`)
//     return acc+curr;
// },0)//iif here we are giving accumulator 0 as starting value
// console.log(myTotal)

const myTotal=Array.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)


const cart=[{
    itemName:"js course",
    price:2999
},
{
    itemName:"java course",
    price:5999
},
{
    itemName:"php course",
    price:3999
},
{
    itemName:"ML course",
    price:6999
},
{
    itemName:"android course",
    price:12999
}
]

const total=cart.reduce((acc,item)=>acc+item.price,0);
console.log(total)

