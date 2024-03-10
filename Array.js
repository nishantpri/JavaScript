const arr=[0,1,2,3,4,5,true,"Hitesh"] // Array in javascript can hold multiple type of data and its size  is resizeable 
//JavaScript array-copy operations create shallow copies. which means if we will change anything it will reflect in original array 
// console.log(arr[0]);

// Array Methods
arr.push(6);
arr.push(7);
arr.pop();// it will pop last value of Array
arr.unshift(9);//it will push element at the first index  of Array
arr.shift();// remove first element of Array
// console.log(arr.includes(5));
// console.log(arr.indexOf(5));
// const newArr=arr.join() //bind and convert element of Array in String
// console.log(arr.includes(5))

// console.log(arr.indexOf(5));
// console.log(arr);
// console.log(newArr);

console.log("A ",arr);
const newA=arr.slice(1,3);// slice method gives subArry excluding last  and it doesn't manupulates into original Array
console.log(newA);
console.log("B ",arr)


const newA2=arr.splice(1,3);// splice method gives subArry inlcuding last index of range and it manupulates original Array 
console.log(newA2);
console.log("c",arr)


