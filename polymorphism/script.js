//Polymorphism is taking advantage of inheritence to override shared behaviors for example a child class will override a function or method from the parent class

class Animal {
  constructor(name) {
    this.name = name;
  }
  //method
  makeSound() {
    console.log('Generic animal sound');
  }
}

//child class
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
//   Overriding method of the parent method, if this method is commented out the parent method makeSound will on any new Dog instance
  makeSound(){
    //   could call parent method inside this derived child method
    // super.makeSound()
      console.log('woofofoowoooooof')
  }
}
const a1 = new Animal('Greg');
const a2 = new Dog ('Spiro');
a1.makeSound();
a2.makeSound();
