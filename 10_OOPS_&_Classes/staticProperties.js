class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    // createId(){
    //     return "123"
    // }
    static createId(){ // static keyword is use to limit the access to some instance  
        return "123"
    }

}


const userOne = new User("Aditya")
userOne.logMe()
//console.log(userOne.createId()) // not able to acces beacuse of static keyword declare in function of createId in User Class

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const userTwo = new Teacher("ram","kamal@aditya.com")
userTwo.logMe()
//console.log(userTwo.createId()); // not able to acces child class also beacuse of static keyword declare in parent class

