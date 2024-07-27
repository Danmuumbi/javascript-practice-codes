// Define a standalone function
function total() {
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
}

// Define the person object with a method using `this`
const person = {
    name: "daniel",
    age: 23,
    info: function() {
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    }
};

// Calling the info method directly on the person object
person.info(); // my name is daniel and i am 23 years old

console.log("calling using the function not the this as an object");

// Define person1 and person2 objects using the standalone total function
const person1 = {
    name: "muuo",
    age: 23,
    info: total
};

const person2 = {
    name: "muuo",
    age: 23,
    info: total
};

// Calling the info method on person1 and person2 which uses the standalone total function
person1.info(); // my name is muuo and i am 23 years old
person2.info(); // my name is muuo and i am 23 years old

console.log("calling without the total method as before");

// Define person3 object with a method that accepts an age parameter
const person3 = {
    name: "person3",
    info: function(age) {
        console.log(`my name is ${this.name} and i am ${age} years old`);
    }
};

// Calling the info method on person3 with an age argument
person3.info(38); // my name is person3 and i am 38 years old

// Define person4 object
const person4 = {
    name: "person4",
    age: 23
};

// Using the call method to invoke info on person4 with a different age
person3.info.call(person4, 34); // my name is person4 and i am 34 years old

// Using the apply method to invoke info on person4 with a different age
console.log("the apply method is the same");
person3.info.apply(person4, [39]); // my name is person4 and i am 39 years old

// Using the bind method to create a new function with a bound context
const boundInfo = person3.info.bind(person4);
boundInfo(40); // my name is person4 and i am 40 years old




