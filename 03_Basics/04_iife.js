// Immediately Invoked Function Expression (IIFE)

// function dbMessage(){
//     console.log(`DB Connected`);
// }

// dbMessage()


// Immediately execute function ()()
// IIFE is use to remove the global scope pollution
(function dbMessage(){ // Also  called as named IIFE
    console.log(`DB Connected`);
})(); // use ;(semi-colon) when use to IIFE because IIFE don't know where to stop or end iife context.

// Arrow Function
(()=> { // Also called as Simple IIFE
        console.log("DB CONNECTED TWO");
})();

((name)=> {
        console.log(`DB Connected in ${name}`);
})("MyPC")