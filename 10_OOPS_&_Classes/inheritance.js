class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is : ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) // directly we can call username using super keyword
        this.email = email
        this. password = password
    }

    addCourse(){
        console.log(`This course was added by ${this.username}.`);
    }
}

const userOne = new Teacher("Raj","raj@abc.com","13567")
userOne.addCourse()
userOne.logMe() // Teacher Class is inheritated from User class (parent class) , so we can use User Class methods here 

const userTwo = new User("Tarun")
// userTwo.addCourse() // addCourse() only available in Teacher class (child class)
userTwo.logMe() 

console.log(userOne == userTwo); // false
console.log(userOne instanceof Teacher); // true
console.log(userTwo instanceof Teacher); // false
console.log(userOne instanceof User); // true
console.log(userTwo instanceof User); // true

