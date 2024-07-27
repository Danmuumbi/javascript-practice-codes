// Original Array
const arr = ["muuo", "mutua", "muvoye", "william"];

// 1. Using find() to locate a specific element
const name = arr.find((val) => {
  return val === "muuo";
});

console.log("find():", name);  // Output: "muuo"
// Explanation: The find() method returns the first element in the array that satisfies the condition (value equals "muuo").

// 2. Using reverse() to reverse the array
const arr1 = arr.reverse();
console.log("reverse():", arr1);  // Output: ["william", "muvoye", "mutua", "muuo"]
// Explanation: The reverse() method reverses the order of the elements in the array in place.

// 3. Using fill() to modify elements in the array
const arr2 = arr.fill(0, 2, 4);  // Fill elements with 0 from index 2 to 4 (excluding index 4)
console.log("fill():", arr2);  // Output: ["william", "muvoye", 0, 0]
// Explanation: The fill() method fills the specified value (0) from the start index (2) to the end index (4, not inclusive).

// 4. Using splice() to add new elements
const arr3 = arr.splice(2, 2, "dan", "felix");
console.log("splice():", arr3);  // Output: [0, 0]  (The removed elements)
// Explanation: The splice() method changes the contents of an array by removing or replacing elements.
// It removes 2 elements starting at index 2 and adds "dan" and "felix" at the same index.

// Checking the final state of the original array after splice
console.log("After splice():", arr);  // Output: ["william", "muvoye", "dan", "felix"]
