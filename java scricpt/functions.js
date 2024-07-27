// Function to greet the user
function greetings() {
    return "Hello, welcome!";
}

// Function to perform a specific arithmetic operation based on operator
function calculate(operator, a, b) {
    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    // Check if denominator is zero to avoid division by zero error
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

let num1 = 10;
let num2 = 5;

console.log(greetings()); // Output: "Hello, welcome!"

console.log("Addition:", calculate('+', num1, num2));   // Output: 15
console.log("Subtraction:", calculate('-', num1, num2));   // Output: 5
console.log("Multiplication:", calculate('*', num1, num2));   // Output: 50
console.log("Division:", calculate('/', num1, num2));   // Output: 2
