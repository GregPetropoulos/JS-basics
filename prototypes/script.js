// * CREATING AN OBJECT WITH A CONSTRUCTOR FUNCTION
// function Bike(model, color) {
//   this.model = model;
//   this.color = color;
//   this.getBikeDetails = function () {
//     return `${this.model} bike is ${this.color}`;
//   };
// }

// const bikeObj1= new Bike('BMW','BLACK')
// const bikeObj2= new Bike('SUZUKI','WHITE')

// console.log(bikeObj1.getBikeDetails())
//BMW bike is BLACK

// console.log(bikeObj2.getBikeDetails())
//SUZUKI bike is WHITE

// console.log(bikeObj1,bikeObj2)
//Bike {model: 'BMW', color: 'BLACK', getBikeDetails: ƒ}
//color: "BLACK"
//getBikeDetails: ƒ ()
//model: "BMW"
//[[Prototype]]: Object

// Bike {model: 'SUZUKI', color: 'WHITE', getBikeDetails: ƒ}
// color: "WHITE"
// getBikeDetails: ƒ ()
// model: "SUZUKI"
// [[Prototype]]: Object

// * CREATING AN OBJECT WITH THE PROTOTYPES
function Bike(model,color){
    this.model=model
    this.color=color
}

Bike.prototype.getBikeDetails= function () {
    return `${this.model} bike is ${this.color}`
}
const bikeObj1= new Bike('YAMAHA','RED')
const bikeObj2= new Bike('HARLEY','BLUE')

console.log(bikeObj1.getBikeDetails())
// YAMAHA bike is RED

console.log(bikeObj2.getBikeDetails())
// HARLEY bike is BLUE

console.log(bikeObj1,bikeObj2);
// Bike {model: 'YAMAHA', color: 'RED'}
// color: "RED"
// model: "YAMAHA"
// [[Prototype]]: Object
// getBikeDetails: ƒ ()
// constructor: ƒ Bike(model,color)
// [[Prototype]]: Object

// Bike {model: 'HARLEY', color: 'BLUE'}
// color: "BLUE"
// model: "HARLEY"
// [[Prototype]]: Object
// getBikeDetails: ƒ ()
// constructor: ƒ Bike(model,color)
// [[Prototype]]: Object








