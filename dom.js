//DOM:--Document Object Model
//Dom Diagram:-window->document->Html(head,body)->head(Title,meta)->Title(textNode )
//Body->div->class->h1->para->h1->attributr&textNode->p->textNode
//document.getElementById()->will return html element 
//document.get.ElementById().id->will give as a result 
//document.getElementById('title').className ->will give className as result
//document.getElementById("title").getAttribute('id')->it will return all Attribute of id 
//document.getElementById("title").getAttribute('class')->it will return all Attribute of class
//document.getElementById("title").setAttribute('class','testclass')->it will overWrite  the class name as testclass
// we can manupulate any element and id using dom  as we can also reset css for them for that we need to first store everything in a variable and then we need to perfoerm the needed
//suppose we saved that in a const var(title)->
//title.style.backgroundColor="green"  -> using this we can  also set color and pixel and other thing
//how to get content of any element->to fetch content we can use variableName.innerHtml or we can do .innerText or we can.textContent and innerHtml will also return any element within the called element
//innerText will not show hidden content while  innerContent will show also hidden in the element
//document.querySelector('h1');
//document.querySelector('input[type="password"]') we can also select such query as we can select in css
 //ll.style.backgroundColor="green";


 //Now we are going to select multiple element using other selector earlier we were using  querySelector and now we are using querySelector all to select all element and also manipulate all element with same name and id
 //document.querySelectorAll('ul')
// NodeList [ ul
// ]

// const temp=document.querySelectorAll('li')
// undefined
// temp
// NodeList(3) [ li, li, li ]
// it gives result as an Array which is not actual array because it does not run all property of array(like map and reduce) but it has prototype as forEach loop 
//const np=document.querySelectorAll('ul');
// undefined
// np[0].style.color='pink'
// "pink" 
//while using queryselectorAll we need to pass the element which we want to over write or manupulate 




//below example shows even we have only one element in Node list we need to pass which element we need to manipulate
// const myh1=document.querySelectorAll('h1')
// undefined
// h1.style.color='green' 

//const temp=document.querySelectorAll('ul')
//-------->>using forEach loop 
// undefined
// temp
// NodeList [ ul
//  ]

// temp.forEach((l)=>{})
// undefined
// temp.forEach((l)=>{
//   l.style.backgroundcolor="green"
// }) 

// we can convert HTML collection to Array below
const tempList=document.getElementsByClassName('list')
undefined
Array.from(tempList)
const myNewArray=Array.from(tempList)
myNewArray.forEach((li)=>{
    li.style.color='pink'
})//--> after that we can now use for loop on HTML collection by converting that to array 

