class Person {//this is defining a class declaration.to define class expressions is no different from this but you declare is as a variable using const keyword
    constructor(name){
        this.name = name
    }
    introduceself(){
        console.log(`my name is called ${this.name}`)
    }

}
//Inheritance
class Proffesor extends Person{
    constructor(name,teaches){
        super(name)
        this.teaches = teaches
    }
    subject(){
        console.log(`My name is DR ${this.name} and ill be taking you through ${this.teaches}`);
    }
}
const myname =  new Person("muuo");
myname.introduceself()
const prof = new Proffesor("Daniel","Computer science")
prof.subject()