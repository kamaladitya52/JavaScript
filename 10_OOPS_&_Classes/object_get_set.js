const User = {
    _email : "aditya@abc.com", // underscore '_' represent its a private property of user 
    _password : "91247634",
    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._password = val
    }
}

const newUser = Object.create(User) // create newUser based on User aspect
console.log(newUser.email); // Output :- ADITYA@ABC.COM
// console.log(newUser._email); // Output :- aditya@abc.com
