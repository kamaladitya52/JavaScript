// if statement

const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("Executed");
}

// < , > , <= , >= , == , != , ===(strict check i.e.. datatype check also) , !== 

const temperature = 40

if(temperature < 50){
    console.log("Temperature is less than 50");
}else{
    console.log("Temperature is greater than 50");
}

const score = 200

if(score > 100){
    let power = "fly"
    console.log(`Power : ${power}`);
}

// console.log(`Power : ${power}`); // outside the block scope of power

const balance = 1000
if(balance >500) console.log("test"); // Implicit scope
// if(balance >500) console.log("test"), console.log("test2"); // Can write multiple line using , but not a good practice

// ********* Nested  ********

if(balance < 500){
    console.log("Less than 500");
}else if(balance < 750){
    console.log("Less than 750");
}
else if(balance < 900){
    console.log("Less than 900");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");    
}
