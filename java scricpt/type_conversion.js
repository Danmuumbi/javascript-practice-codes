// Example of implicit type conversion
let num1 = 10; // number
let str1 = "5"; // string

console.log(num1 + str1); // Output: "105" (num1 gets converted to string and concatenated with str1)

// Example of explicit type conversion
let str2 = "20";
let num2 = parseInt(str2); // converting string to integer using parseInt
console.log(num2); // Output: 20

let num3 = 25;
let str3 = num3.toString(); // converting number to string using toString
console.log(str3); // Output: "25"

// Example of Boolean conversion
let bool1 = Boolean(0); // false
let bool2 = Boolean(1); // true
let bool3 = Boolean(""); // false
let bool4 = Boolean("hello"); // true
let bool5 = !!0; // false (using double negation)
let bool6 = !!""; // false
let bool7 = !!5; // true

console.log(bool1, bool2, bool3, bool4, bool5, bool6, bool7);

// Example of type conversion using the unary plus operator (+)
let str4 = "10";
let num4 = +str4;
console.log(num4); // Output: 10

// Example of type conversion using the String() function
let num5 = 15;
let str5 = String(num5);
console.log(str5); // Output: "15"
