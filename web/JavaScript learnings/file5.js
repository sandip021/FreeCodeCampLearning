// booleans(true/false) and comparisons(<, >, <=, >=, ===, !==)
let num1 = 20;
let num2 = 20;
console.log(num1 >= num2);

// == vs ===
let num3 = 20;
let num4 = "20";
console.log(num3 == num4);
console.log(num3 === num4); 

// != vs !==
let num5 = 20;
let num6 = "20";
console.log(num5 != num6);
console.log(num5 !== num6);

// // falsy values: false, 0, "", null, undefined, NaN
// console.log(Boolean(false)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false

// // truthy values: true, 1, "hello", [], {}, function() {}
// console.log(Boolean(true)); // true
// console.log(Boolean(1)); // true
// console.log(Boolean("hello")); // true
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(function() {})); // true


// if-else statements
let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

let num = -10;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


// ternary operator
let age1 = 20;
let message = (age1 >= 18) ? "You are an adult." : "You are not an adult.";
console.log(message);   