// Working with Arrays and Iterables

// Original array with nested arrays
const nestedArr = [1, 2, [3, 4, [5, 6]], 7, 8];

// Using flat() to flatten the array to a depth of 2
const flatArr = nestedArr.flat(2);
console.log("flat:", flatArr);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Using sort() to sort the flattened array
const sortedFlatArr = flatArr.sort((a, b) => a - b);
console.log("sorted flat array:", sortedFlatArr);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Array of strings
const arr = ["muuo", "mutua", "muvoye", "william"];

// Using find() to locate an element
const foundName = arr.find(val => val === "muuo");
console.log("find:", foundName);  // Output: "muuo"

// Using reverse() to reverse the array
const reversedArr = arr.reverse();
console.log("reverse:", reversedArr);  // Output: ["william", "muvoye", "mutua", "muuo"]

// Resetting the array to its original order
arr.reverse();

// Using fill() to modify elements
const filledArr = [...arr];  // Creating a copy to prevent modifying original array
filledArr.fill("filled", 1, 3);
console.log("fill:", filledArr);  // Output: ["muuo", "filled", "filled", "william"]

// Using splice() to add/remove elements
const splicedArr = [...arr];  // Creating a copy to prevent modifying original array
splicedArr.splice(2, 2, "dan", "felix");
console.log("splice:", splicedArr);  // Output: ["muuo", "mutua", "dan", "felix"]

// Using for...of to iterate over array elements
console.log("for...of array:");
for (const name of arr) {
  console.log(name);
}
// Output:
// muuo
// mutua
// muvoye
// william

// Using for...of to iterate over string characters
const str = "muuo";
console.log("for...of string:");
for (const char of str) {
  console.log(char);
}
// Output:
// m
// u
// u
// o

// Using Symbol.iterator with a custom iterable
const customIterable = {
  *[Symbol.iterator]() {
    yield "muuo";
    yield "mutua";
    yield "muvoye";
    yield "william";
  }
};

console.log("custom iterable:");
for (const val of customIterable) {
  console.log(val);
}
// Output:
// muuo
// mutua
// muvoye
// william
