function person(name){
    this.name = name;
    this.introduceself = function(){
        console.log(`My name is ${this.name}`);
    };
}
const muuo = new person("muuo")
muuo.introduceself()
const daniel = new person("daniel")
daniel.introduceself()