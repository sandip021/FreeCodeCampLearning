// typeof 
let age = 25;
console.log(typeof age); // number

let name = "Sandip";
console.log(typeof name); // string 

age = String(age);
console.log(typeof age); // string

// string concatination
let firstName = "Sandip";
let lastName = "Pradhan";
let fullName = firstName + " " + lastName;
console.log(fullName); // Sandip Pradhan    

let string1 = "13";
let string2 = "7";      
let result = string1 + string2; // 137
console.log(result); // 137
let result2 = +string1 + +string2; // 20
console.log(result2);

// template strings
let age1 = 25;
let name1 = "Sandip";
let message = `My name is ${name1} and I am ${age1} years old.`;
console.log(message); // My name is Sandip and I am 25 years old.

let a;
console.log(a); // undefined
a = 10;
console.log(typeof a, a); // number 10

let b = null;
console.log(typeof b, b); // object(error bug) null

// bigint
let myNumber = 1234567890123456789012345678901234567890n;   
console.log(typeof myNumber, myNumber); // bigint 1234567890123456789012345678901234567890n 
// bigint and number cannot be mixed in operations


