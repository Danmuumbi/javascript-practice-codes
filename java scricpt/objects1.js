// Define the person object
const person = {
    name: "Daniel Muuo", // Store full name as a single string
    age: 22,
    bio() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    },
    introduceself() {
        console.log(`I am ${this.name}.`);
        console.log(`I am ${this.age} years old.`);
    }
};

// Call methods using dot notation
person.bio();
person.introduceself();

// Log a statement using person.bio() (which logs inside bio method)
console.log('Calling person.bio() returns: ', person.bio());
