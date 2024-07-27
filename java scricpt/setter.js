const student = {
    _firstName: 'Monica', // Private property

    // Accessor property (setter)
    set changeName(newName) {
        this._firstName = newName;
    },

    // Accessor property (getter)
    get getName() {
        return this._firstName;
    }
};

console.log(student.getName); // Output: Monica

// Change (set) object property using a setter
student.changeName = 'Sarah';

console.log(student.getName); // Output: Sarah
