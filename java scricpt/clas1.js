class Product{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    display(){
        console.log(`${this.name} costs ${this.price} bob`)
    }
}

const product = new Product("bread",70);
product.display()