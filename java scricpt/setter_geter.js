// Define student object with firstName property
const student = {
    firstName: 'Daniel'
};

// Define getter for accessing firstName property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName; // Return the value of firstName property
    }
});

// Define setter for changing the value of firstName property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value; // Set the value of firstName property to the provided value
    }
});

// Output the initial value of firstName property
console.log(student.firstName); // Output: Monica

// Change the value of firstName property using the setter
student.changeName = 'Paul';

// Output the updated value of firstName property
console.log(student.firstName); // Output: Sarah
