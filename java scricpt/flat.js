// Original Array with Nested Arrays
const arr = [1, 2, [3, 4, [5, 6]], 7, 8];

// Using flat() to flatten the array to a depth of 1
const flatArr1 = arr.flat(1);
console.log("flat(1):", flatArr1);  // Output: [1, 2, 3, 4, [5, 6], 7, 8]

// Using flat() to flatten the array to a depth of 2
const flatArr2 = arr.flat(2);
console.log("flat(2):", flatArr2);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
