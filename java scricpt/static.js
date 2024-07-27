class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Instance method
    info() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }

    // Static method
    static greet() {
        console.log("Hello! This is a static method.");
    }

    // Static property
    static species = "Homo sapiens";
}

// Creating an instance of the class
const person1 = new Person("Daniel", 23);

// Calling the instance method
person1.info(); // Output: My name is Daniel and I am 23 years old.

// Calling the static method
Person.greet(); // Output: Hello! This is a static method.

// Accessing the static property
console.log(Person.species); // Output: Homo sapiens

// Trying to call the static method on an instance
// This will result in an error
try {
    person1.greet();
} catch (error) {
    console.log(error.message); // Output: person1.greet is not a function
}

// Trying to access the static property on an instance
// This will result in undefined
console.log(person1.species); // Output: undefined
