// Step 1: Create a function that accepts a callback function as an argument
function processUserInput(callback) {
    // Simulate some process (e.g., user input processing)
    console.log("Processing user input...");

    // Simulate a delay using setTimeout
    setTimeout(function() {
        const name = "Alice"; // Simulated user input
        callback(name); // Execute the callback with the result
    }, 2000); // Delay for 2 seconds
}

// Step 2: Create a function that will be passed as a callback
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to our site.`);
}

// Step 3: Execute the main function with the callback function
processUserInput(greetUser);
