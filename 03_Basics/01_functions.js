function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}
// sayMyName()

function addTwoNumber(number1, number2){
    console.log(number1 + number2);
}


addTwoNumber(4,5)
addTwoNumber(4,"5")
addTwoNumber(4,"a")
addTwoNumber(4,null)

const result1 = addTwoNumber(5,8)
console.log("Result :",result1); // undefined (Because no return statement)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1+number2
}

const result2 = addTwoNumbers(5,8)
console.log("Result :",result2);

function loginUsername(username){
    return `${username} just logged in` // String Interpolation Stle using back-tick.
}

console.log(loginUsername("Aditya"));
console.log(loginUsername("")); // for empty string no username prints
console.log(loginUsername()); // undefined prints in place of username if we can't pass the argument 

function newLoginUsername(username){
    // if(username === undefined){
    //     console.log("Please enter the username");
    //     return
    // }
    if(!username){ // By-default we think undefined as false and also ""(empty string) as false.
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in` // String Interpolation Stle using back-tick.
}
console.log(newLoginUsername());

function defaultLoginUsername(username = "Aditya"){ // default parameter
    return `${username} just logged in` // String Interpolation Stle using back-tick.
}
console.log( defaultLoginUsername())

function calculateCartPrice(...num1){ // ... indicates rest operator here
    return num1
}
console.log(calculateCartPrice(200,500,700,900,2000)); // return array by using rest operator in above function.

function newCalculateCartPrice(val1,val2,...num1){ // ... indicates rest operator here
    return num1
}
console.log(newCalculateCartPrice(200,500,700,900,2000)); // return array stored in num1 only

const user = {
    coursename : "Javascript",
    price : 1999
}

function handleObject(anyObject){
    console.log(`Coursename is ${anyObject.coursename} and Price is ${anyObject.price}.`);
}

handleObject(user)
handleObject({
    coursename: "DSA",
    price: 3999
})

const myNewArray = [11,22,33,44,55]
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400,500]));

