// console.log(2>1);
// console.log(2>=1);

console.log("2">1);
console.log("02">1);
// we should not compare two different data type

console.log(null>0);
console.log(null==0);
console.log(null>=0); // above two will give false while this will give true  the reason is that 
// an equality check == and comparisons >  < = <= work differently comparison convert null to a number treating it as 0 

// comparing undefined will give always false 

/*
 (===) this operator is used for strict check as it check not only value but also data type

*/
