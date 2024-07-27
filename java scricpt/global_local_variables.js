// Global variable = global variables are declared outside the function
let globalVar = 10;

function main() {
    // Local variable = Declared within the function
    let localVarMain = 20;

    // Accessing global variable within the main function
    console.log("Global variable within main function: " + globalVar);

    // Accessing local variable within the main function
    console.log("Local variable within main function: " + localVarMain);

    // Calling another function
    displayVariables();
}

function displayVariables() {
    // Local variable within the displayVariables function
    let localVarFunction = 30;

    // Accessing global variable within the displayVariables function
    console.log("Global variable within displayVariables function: " + globalVar);

    // Accessing local variable within the displayVariables function
    console.log("Local variable within displayVariables function: " + localVarFunction);
}

// Calling the main function to start the program
main();