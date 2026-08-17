// and or operators
let name = "Sandip";
let age = 17;

// if(name[0] === "S")
// console.log("Name starts with S");
// if(age > 18)
// console.log("You are an adult");    
// if(name[0] === "S" && age > 18)
// console.log("Name starts with S and you are an adult");

if(name[0] === "S" || age > 18)
console.log("Name starts with S");


// // nested if-else statements
// let winningNumber = 7;
// let userGuess = +prompt("Guess a number between 1 and 10:"); 
// console.log("User guessed:", userGuess);
// if(userGuess === winningNumber) {
//     console.log("Congratulations! You guessed the correct number.");
// }else {
//     if(userGuess < winningNumber) {
//         console.log("Your guess is too low. Try again.");
//     }else {
//         console.log("Your guess is too high. Try again.");
//     }
// }

// if-else if-else statements
let marks = 66;
if(marks >= 90) {
    console.log("Grade: A+");
} else if(marks >= 80) {
    console.log("Grade: A");
} else if(marks >= 70) {
    console.log("Grade: B+");
} else if(marks >= 60) {
    console.log("Grade: B");
} else if(marks >= 50) {
    console.log("Grade: C+");
}else if(marks >= 40) {
    console.log("Grade: C");
}else {
    console.log("Grade: F");
}

// switch statement
let day = 6;
switch(day) {
    case 0:
        console.log("Sunday");
        break; // break is used to exit the switch statement after a case is matched
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;  
    default:
        console.log("Invalid day");
}   


// while loop
let i = 0;
console.log(i);
i++;
while(i <= 4) {
    console.log(i);
    i++;
}