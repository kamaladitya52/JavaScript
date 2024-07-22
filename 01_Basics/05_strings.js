const name = "Aditya"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}.`)

const gameName = new String('Aditya Kamal')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //last index not included
console.log(newString);

const anotherString = gameName.slice(-8,9)
console.log(anotherString);

const newStringOne = "             Aditya             "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.yahoo.com"
console.log(url.replace('yahoo','google'));

console.log(url.includes('www')); //  to find some keyword in that string
console.log(url.split('.'));