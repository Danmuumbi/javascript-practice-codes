const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// Setting the fullName property using the setter
person.fullName = "Jane Smith";
console.log(person.firstName); // Output: Jane
console.log(person.lastName);  // Output: Smith
