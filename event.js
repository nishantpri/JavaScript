// // document.getElementById("owl").onclick=function(){
// //     alert("Owl clicked")
// // }
// // although above code is properly working we should avoid and use event listener

// document.getElementById('owl').addEventListener('click',function(){
//     alert("owl clicked")
// },false)//false is default that's why we dont write 

// // attachEvent()

// //   EventObject
// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(e);
// },false)// it will  give you so many other event too as browser event ,enviroment event ,mouse event

// // basic to study->type,timestamp,defaultPrevent,target,toElement,sourceElemnent
// //clientx,clienty,screenX,scrennY
// //altKey,ctrlKey,shiftKey,keyCode
// //EventPropagation:-it has two  context (1)-Event Bublling(fasle) and (2)Event Capturing(true)
// document.getElementById('images').addEventListener('click',function(e){
//     console.log(e)
//     console.log(`cliked inside the ul`);
// },false)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(e);
//     console.log(`cliked owl`);
//     e.stopPropagation()

   
// },false)
// // we will pass true it will move to top to down which means it will move larger element to smaller element and if we will write false it will run and show inner element first then after outer element
// // if we want to stop propagation which means  we want to achive only inner or outer element event we can also use e.stopPropagation() it will not allow event to bubble to inner or outer element


// //preventDefault:->used to prevent from default behaviour of any element
// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefaulted();
//     console.log("clicked google")
// },false)// this will stop default behaviour of google href elenment


//Example
document.querySelector('#images').addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);// this will give us also the target due to which this event has occured 
    console.log(e.target.parentNode)// this will give us parent node of clicked element
    if(e.target.tagName=='IMG'){
    let removeIt=e.target.parentNode
    removeIt.remove()
    }
    // we can also use -> removeIt.parentNode.removeChild(removeIt)

})