// string indexing
let str = "Hello, World!";
console.log(str[0]);
console.log(str[7]);
console.log(str[str.length - 1]);

// string trimming
let fullName = "   Sandip Pradhan   ";
fullName = fullName.trim();
console.log(fullName);
console.log(fullName.length);

console.log(fullName.toUpperCase()) ; 
console.log(fullName.toLowerCase()) ;

//slice
let slicedStr = fullName.slice(0, 5); //Sandi
console.log(slicedStr);


//