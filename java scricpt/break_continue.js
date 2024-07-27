// JavaScript code to demonstrate the use of break and continue statements

// Example of the break statement
console.log("Example of the break statement:");
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        console.log("Encountered the break statement at i =", i);
        break; // Exit the loop when i is 3
    }
    console.log("Current value of i:", i);
}
console.log("After the loop");

// Example of the continue statement
console.log("\nExample of the continue statement:");
for (let j = 0; j < 5; j++) {
    if (j === 2) {
        console.log("Encountered the continue statement at j =", j);
        continue; // Skip the rest of the loop body when j is 2
    }
    console.log("Current value of j:", j);
}
console.log("After the loop");
