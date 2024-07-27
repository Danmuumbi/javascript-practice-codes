// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Use the `some` method to check if there is at least one even number in the array
const some_even = numbers.some(number => number % 2 === 0);
console.log(`Is there at least one even number? ${some_even}`); // Output: true

// Define another array of numbers (identical to the previous one)
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Use the `every` method to check if all numbers in the array are even
const every_even = numbers1.every(number1 => number1 % 2 === 0);
console.log(`Are all numbers even? ${every_even}`); // Output: false

// Define another array of numbers (identical to the previous ones)
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Use the `filter` method to get an array of all even numbers
const filter_even = numbers2.filter(number2 => number2 % 2 === 0);
console.log(`Filtered even numbers: ${filter_even}`); // Output: [2, 4, 6, 8]

// Define an array of employee objects
const employees = [
    { name: 'muuo', id: 10, role: 'developer' },
    { name: 'mutua', id: 20, role: 'accountant' },
    { name: 'muvoye', id: 30, role: 'designer' },
    { name: 'mulinge', id: 40, role: 'engineer' },
    { name: 'daniel', id: 50, role: 'developer' }
];

// Use the `filter` method to get an array of all employees with the role 'developer'
const developers = employees.filter(dev => dev.role === 'developer');
console.log('Filtering out developers:', developers);

// Improve output by mapping to developer names for clearer output
const developerNames = developers.map(dev => dev.name).join(', ');
console.log(`Developers: ${developerNames}`); // Output: Developers: muuo, daniel
