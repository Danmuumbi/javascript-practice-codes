class Animal {
    constructor(sound) {
      this.sound = sound;
    }
  
    makesound() {
      console.log(`The animal makes a ${this.sound} sound.`);
    }
  }

  class Dog extends Animal{
    constructor(sound){
        super (sound)
    }
  }
  
  const anim = new Animal("bark");
  anim.makesound(); // Output: The animal makes a bark sound.

  const dog = new Dog("barks12")
  dog.makesound()