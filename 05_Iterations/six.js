const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach(  (item) => {
    // console.log(item);
    return item
})

console.log(values); //forEach loop return undefined 

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4 ) // filter also uses call back function
console.log(newNums); // filter returns array

const neNums = myNums.filter( (num) => {
    return num > 6 // use return when using scope {}, otherwise it gives empty array
} ) 
console.log(neNums); 

const myNewNums = []

myNums.forEach( (num) =>{
    if(num>5){
        myNewNums.push(num)
    }
})

console.log(myNewNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook = books.filter( (bk) => bk.genre === "History")
userBook = books.filter( (bk) => { return bk.publish >= 2000})
userBook = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBook);