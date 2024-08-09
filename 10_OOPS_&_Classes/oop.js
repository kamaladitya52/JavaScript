const user = {
    username: "Aditya",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database.")
        console.log(`Username : ${this.username}`) // this always talks about current context
        console.log(this)
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // gives empty in node environment in current context but in global context when running in browser returns the window object


// Constructor Function -> Always gives new instance or copy
// const promiseOne = new Promise() // new is constructor function here
// const data = new Date()

function User(username, loginCount, isLoggedIn){ // this.____ is our current context object
    this.username = username 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
};

const userOne = User("Aditya",12,true);
const userTwo = User("Rohit",8,false); 
console.log(userOne); // userTwo overwrites the values of userOne 
// console.log(userOne.username);

// Importance of new keyword -> new keyword first create empty object (new object) called as instance, 
//then constructor function is call, 
// then arguments are passed or inject with the help of this keyword  and 
// then we get that values inside the function
const userThree = new User("Raj",12,true);
const userFour = new User("Ayush",8,false); 
console.log(userThree); // userThree didn't overwrites the values because we use new keyword
console.log(userFour); // userFour didn't overwrites the values because we use new keyword
console.log(userFour.constructor); // .constructor is reference to self i.e.. User here