// Function declarations are hoisted to the top of their scope, which means they can be called before they are defined in the code.
greet(); // Output: Hello, world!

function greet() {
    console.log("Hello, world!");
}


//A function expression defines a function inside an expression and can be either named or anonymous. Function expressions are not hoisted, so they cannot be used before they are defined.
const greet1 = function() {
    console.log("Hello, world!");
};

greet1(); // Output: Hello, world!

//You can also have named function expressions, where the function has a name but is still assigned to a variable
const greet2 = function greetFunction() {
    console.log("Hello, world!");
};

greet2(); // Output: Hello, world!
