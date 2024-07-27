// JavaScript code to demonstrate the usage of various operators

// Arithmetic operators
let a = 10;
let b = 20;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = b / a;
let remainder = b % a;

console.log("Sum: " + sum); // Addition
console.log("Difference: " + difference); // Subtraction
console.log("Product: " + product); // Multiplication
console.log("Quotient: " + quotient); // Division
console.log("Remainder: " + remainder); // Modulus

// Assignment operators
let x = 5;
x += 3; // equivalent to x = x + 3
console.log("x after addition: " + x);

// Comparison operators
let num1 = 10;
let num2 = 20;
console.log("num1 == num2: " + (num1 == num2)); // Equal to
console.log("num1 != num2: " + (num1 != num2)); // Not equal to
console.log("num1 > num2: " + (num1 > num2)); // Greater than
console.log("num1 < num2: " + (num1 < num2)); // Less than
console.log("num1 >= num2: " + (num1 >= num2)); // Greater than or equal to
console.log("num1 <= num2: " + (num1 <= num2)); // Less than or equal to

// Logical operators
let condition1 = true;
let condition2 = false;
console.log("condition1 && condition2: " + (condition1 && condition2)); // Logical AND
console.log("condition1 || condition2: " + (condition1 || condition2)); // Logical OR
console.log("!condition1: " + !condition1); // Logical NOT

// Bitwise operators
let m = 5; // 101 in binary
let n = 3; // 011 in binary
console.log("m & n: " + (m & n)); // Bitwise AND
console.log("m | n: " + (m | n)); // Bitwise OR
console.log("m ^ n: " + (m ^ n)); // Bitwise XOR
console.log("~m: " + (~m)); // Bitwise NOT
console.log("m << 1: " + (m << 1)); // Left shift by 1 bit
console.log("m >> 1: " + (m >> 1)); // Right shift by 1 bit
console.log("m >>> 1: " + (m >>> 1)); // Unsigned right shift by 1 bit

// Ternary operator
let p = 10;
let q = 20;
let max = (p > q) ? p : q; // If p is greater than q, assign p to max; otherwise, assign q to max
console.log("Max: " + max);
