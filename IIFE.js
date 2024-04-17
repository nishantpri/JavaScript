// Immediately Invoked Function XPathExpression(IIFE)
// it is used to remove pollution of global scope variable 
(function chai(){// this is called named IIFE
    console.log(`Db connected`)
})();

(()=>{ // this is called unnamed IIFE
    console.log(`DB connected `)
}
)() 