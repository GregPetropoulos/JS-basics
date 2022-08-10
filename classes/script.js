// *Classes are syntactic sugar of the prototypes and makes it easier to understand with principles of classes in other languages

class Bike {
    constructor(color,model) {
        this.color=color
        this.model=model
    }
}
const bike1= new Bike('GREEN','HONDA')
console.log(bike1);
console.log(bike1.color);