// Promise Created
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Aysnc task is completed");
    },1000)
})

// .then is used to resolve the promise & .cath is use to reject the promise
promiseOne.then(function(){ 
    console.log("Promise consumed."); // Above promise is not connected yet we have to use resolve() to bind it 
    // or promises is not consumed
})

// Second way to apply promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed.");
        resolve() // to consume promise we can resolve() here
    },1000)
}).then(function(){
    console.log("Async 2 is resolved now.");
})

// Third way to apply promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "kamaladitya52", email: "kamaladitya52@gmail.com" })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Fourth way to apply promise and use of chaining method to consume promise
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "kamaladitya", password : 1234567890})
        }else{
            reject('ERROR : Something went wrong.')
        }
    },1000)
})

// chaining of .then  
promiseFour
.then((user)=>{
    console.log(user);
    return user.username // send this value to below .then
})
.then((username)=>{
    console.log(username) // receive the above return value
})
.catch(function(error){
    console.log(error); // receive the error    
})
.finally(()=>console.log("The promise is either resolved or rejected."))

// Fifth way to apply promise and use async to consume it.

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript", password : "jspass"})
        }else{
            reject("Error : Something went wrong")
        }
    },1000)
})

// promise is an object
async function consumePromiseFive(){
    try {
        const  response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive() // Make sure to execute this function defined above

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response); // The below response.json takes time to convert in json that's why we are using await
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("E :",error);
        
    }
}

getAllUsers()

// Same way to use above getAllUsers function without using async with the help of .then and .catch  
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
    
})