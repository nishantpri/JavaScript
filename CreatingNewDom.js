// const parent=document.querySelector('.parent')
// console.log(parent)//-> it will return parent class
// console.log(parent.children)// ->This will return html collection of parent class
// console.log(parent.children[1].innerHTML)// using this we can access children class of any parent or view inner html 
// // we can also access html collection of parent which  return children 
// // it will console all the children of parent
// // for(let i=0;i<parent.children.length;i++){
// //     console.log(parent.children[i].innerHTML);
// // }
// parent.children[1].style.color="red" // we can also do styling using parent class
// console.log(parent.firstElementChild.innerHTML);// this will give first element child as monday
// console.log(parent.lastElementChild)// this will give us last child of the particular parent 
// const DayOne=document.querySelector('.Day')
// console.log(DayOne)
// console.log(DayOne.parent)// we can also trverse from child to parent as this will make our work faster as they are take less time and traversal from dom 
// console.log(DayOne.nextElementSibling);// we can alsd traverse to sibling of any element
// console.log("Nodes:", parent.childNodes) // this will return a list of nodes and list will also consist node for evan space in dom and in contin0us many spaces of line is also considered as ony one node

//+++++++++++++++++How to Create Node List+++++++++++////////////
const div=document.createElement('div')
console.log(div);
div.className= "main"
div.id = Math.random()*10+1
div.setAttribute("title","myname")
div.style.backgroundColor="green";
div.innerText="hello Nishant "

//attach memory div to orignal file
const addText=document.createTextNode("chai or code")
div.appendChild(addText)
document.body.appendChild(div)



