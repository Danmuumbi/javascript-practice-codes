// Function to be used with call, apply, and bind
function total(age){
    console.log(`my name is ${this.name} and i am ${age} years old`);
}

// Object with a method directly defined inside it
const person = {
    name: "daniel",
    age: 23,
    info : function(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    }
};

console.log("Calling using the function directly inside an object:");
const person1 = {
    name: "muuo",
    age: 23,
    info : total // Using the `total` function as a method
};

const person2 = {
    name: "muuo",
    age: 23,
    info : total // Using the `total` function as a method
};

// Calling methods directly
person.info(); // Calls info method of person object
person1.info(23); // Calls total function with person1 context
person2.info(23); // Calls total function with person2 context

console.log("Using call, apply, and bind methods with person3 and person4:");

const person3 = {
    name: "person3",
    info : function(age){
        console.log(`my name is ${this.name} and i am ${age} years old`);
    }
};

// Calling `info` method with different context using call
person3.info(38); // Directly calls person3's method

const person4 = {
    name: "person4",
    age: 23,
};

// Using call method to set context of `this` to person4
person3.info.call(person4, 34); // Output: my name is person4 and i am 34 years old

console.log("Using apply method to set context of `this` to person4");

person3.info.apply(person4, [39]); // Output: my name is person4 and i am 39 years old

console.log("Using bind method to create a new function with bound context");

const boundInfo = person3.info.bind(person4);
boundInfo(40); // Output: my name is person4 and i am 40 years old

// Adding the `bind` method with arguments
const boundInfoWithAge = person3.info.bind(person4, 41);
boundInfoWithAge(); // Output: my name is person4 and i am 41 years old
