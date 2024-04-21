// Now we are creating one function add language to existing list wihout doing again again we are creating function which will make our work much easier
//basic
function  addLanguage(langName){
   const li= document.createElement('li')
   li.innerHTML=`${langName}`
   document.querySelector('.language').appendChild(li)
}
addLanguage("java")
//above code is travesing all the to last node every time we are adding any new element,hence it will take much time to traverse tree of larger nodes 


//second approch
// here we don't neeed to Traverse all tha way to last Node

function addLanguage2(langName){
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addLanguage2("react") 

//Edit
const secondLang=document.querySelector("li:nth-child(1)")
secondLang.innerHTML="MOxo"
//second apprcoh
const newLi=document.createElement('li');
newLi.textContent="mojo"
secondLang.replaceWith(newLi)
//
const secondLang1=document.querySelector('li:first-child')
secondLang1.outerHTML='<li> sql<li/>'


// remove
const last =document.querySelector('li:last-child');
last.remove();
