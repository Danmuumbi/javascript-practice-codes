const student = {
    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Output: Monica

// accessing getter methods (Note: no parentheses)
console.log(student.getName); // Output: Monica
