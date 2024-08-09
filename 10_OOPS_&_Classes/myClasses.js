// ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
        }
        encryptPassword(){
            return `${this.password}abc`
        }
        changeUsername(){
            return `${this.username.toUpperCase()}`
        }
}

const user = new User("aditya","kamaladitya52@gmail.com","123456789")
console.log(user.encryptPassword());
console.log(user.changeUsername());

// Behind the scene of above class before ES6 implementation 

function USER(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

Object.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

Object.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}

const anotherUser = new USER("kamal","aditya.kamal@yahoo.in","987654321")
console.log(anotherUser.encryptPassword());
console.log(anotherUser.changeUsername());

