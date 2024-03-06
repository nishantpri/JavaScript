const name="Nishant"
const roll=964
// console.log(name+ roll+" college"); // we should not use this as this is older and it doesn't provide readability of  code
console.log(`Hello my name is ${name} and my roll number is  ${roll}`);// this is called interpretaion(`` using bactick) we should use this as this is much easier to understand

const gameName=new String('Nishant')// this will give  key  value pair
console.log(gameName);

console.log(gameName[0]);// this will give value at  key 0;
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('N'));
 const newString=gameName.substring(0,4);
 console.log(newString);

 const stringNew=gameName.slice(0,4)
 console.log(stringNew);
 const stringN=gameName.slice(-7,4)// we can also give -neg values to String this will print character in reverse order
 console.log(stringN);


 const Stringname="    nishant    "
 console.log(Stringname);
 console.log(Stringname.trim());// this will trim extra space of the string
 const url="https://chitkara.com/chitkara%20university";
 console.log(url.replace('%20','-'));
 console.log(url.includes('chitkara'));
 const st="Ni-s-h-a-nt";
 console.log(st.split('-'));// this break string st into string array based on '-'


 




