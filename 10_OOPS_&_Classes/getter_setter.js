class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    // get ...() and set ...() by-default methods and we have to define both (combine)
    // get and set methods can be only defined for properties which are present in the class
    // get is use to set the values from outside the class while set is used to set the value inside the class
    
    get email(){
        return this._email.toUpperCase() // only return in getter
    }
    
    set email(val){
        this._email = val // setter can't be returned
    }
    
    get password(){
        // return this.password.toUpperCase()
        // return this._password.toUpperCase()
        return `${this._password}aditya`
    }

    // use to set the value inside the class and this value can be different from get
    set password(value){
        // this.password = value.toUpperCase() // RangeError: Maximum call stack size exceeded
        // this._password = value.toUpperCase()
        this._password = value
    }
}

const aditya = new User("kamaladitya52@gmail.com","abcdefghi")
console.log(aditya.password);
console.log(aditya.email);
