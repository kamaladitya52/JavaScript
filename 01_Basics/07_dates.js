// Dates

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate); // object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2023,0,23) // 0 points to month Jan. 
console.log(myCreateDate.toDateString()); 

//let myNewCreateDate = new Date(2023,0,23,5,3) // 0 points to month Jan. 
//console.log(myNewCreateDate.toLocaleString()); 

// let createDate = new Date("2024-02-14") 
let createDate = new Date("01-03-2024") 
console.log(createDate.toLocaleString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp); // Output is calculated in milisecond from midnight at the beginning of January 1, 1970.
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000)); // Convert it into seconds and ignoring the decimal part here also.

let newDate = new Date()
console.log(newDate.getMonth()); // Month Starting from 0.
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: "long",
    
})
