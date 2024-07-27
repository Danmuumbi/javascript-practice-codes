//Getters allow you to define a method that will be executed when a property is accessed. They are defined using the get keyword.


const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Accessing the fullName property using the getter
console.log(person.fullName); // Output: John Doe
