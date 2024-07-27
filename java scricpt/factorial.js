function factorial(num) {
    if (num < 0) {
        console.log("No factorial of a negative number");
        return; // Exiting the function if the number is negative
    } else if (num === 0 || num === 1) {
        return 1; // Factorial of 0 and 1 is 1
    } else {
        let factorial_is = 1;
        for (let i = num; i > 1; i--) {
            factorial_is *= i;
        }
        return factorial_is;
    }
}

let num = 3;
console.log(factorial(num));
