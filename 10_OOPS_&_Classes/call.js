function setUsername(username){
    // Complex DB calls
    this.username = username
    console.log("Called");
    
}
function createUser(username,email,password){
    setUsername(username) // This function is not call actually. Only its reference is sent here and it's reference is not hold here.
    setUsername.call(username) // .call is use to hold it's reference but no changes is final output yet
    setUsername.call(this,username) // use this parameter actually pass and hold the value here.
    this.email = email
    this.password = password
} 

const user = new createUser("aditya","kamaladitya52@gmail.com","1234567890")
console.log(user);

