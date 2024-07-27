// Creating a set
const set1 = new Set([1, 2, 3, 4, 5]);
console.log('Initial Set:', set1);

// Adding elements to the set
set1.add(6);
set1.add(3); // Duplicate element will not be added
console.log('After Adding Elements:', set1);

// Deleting an element from the set
set1.delete(2);
console.log('After Deleting an Element:', set1);

// Checking if an element exists in the set
console.log('Has 3:', set1.has(3));
console.log('Has 7:', set1.has(7));

// Iterating over a set
console.log('Iterating over Set:');
set1.forEach(value => {
    console.log(value);
});

// Using the Set with arrays
const array1 = [4, 5, 6, 7, 8];
const set2 = new Set(array1);

// Union of two sets
const union = new Set([...set1, ...set2]);
console.log('Union:', union);

// Intersection of two sets
const intersection = new Set([...set1].filter(x => set2.has(x)));
console.log('Intersection:', intersection);

// Difference of two sets
const difference = new Set([...set1].filter(x => !set2.has(x)));
console.log('Difference:', difference);

// Converting a set to an array
const arrayFromSet = Array.from(set1);
console.log('Array from Set:', arrayFromSet);

// Clearing all elements from the set
set1.clear();
console.log('After Clearing the Set:', set1);
