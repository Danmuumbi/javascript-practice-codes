//The try...catch statement in JavaScript is used to handle errors gracefully. It allows you to write code that may throw an error in the try block and handle any errors that occur in the catch block. This helps in preventing your program from crashing and provides a way to manage errors and exceptions.
// try {
//     // Code that may throw an error
// } catch (error) {
//     // Code to handle the error
// }
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    } finally {
        console.log("This code runs regardless of an error.");
    }
}

const result = divide(10, 0);
console.log(`Result: ${result}`);
// Output:
// Error: Division by zero is not allowed.
// This code runs regardless of an error.
// Result: null
