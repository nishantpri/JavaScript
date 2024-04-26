class react{
    constructor(){
        this.library="react"
        this.server="https:/localhost:8000"
        // requirement
        document
        .querySelector('button')
        .addEventListener('click',this.handleClick.bind(this))
    
    }
    handleClick(){
        console.log("Button Clicked");
        console.log(this.server)//-->this has refference of button
    }
}
const app =new react();