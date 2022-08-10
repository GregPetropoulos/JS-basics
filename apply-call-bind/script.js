const objNames1 = {
  firstName: 'Greg',
  lastName: 'Petropoulos'
};

//function for use with any object as a method
const printFullName = function (city, state) {
  console.log(
    `${this.firstName} ${this.lastName} lives in ${city} and ${state}`
  );
};

const objNames2 = {
    firstName: 'Spiro',
    lastName: 'Petropoulos'
};

//*CALL
//Function borrowing
//Call method lets us borrow a function from objects as well (not shown here)
printFullName.call(objNames1, 'Raleigh', 'NC');
printFullName.call(objNames2, 'Athens', 'Central Greece');
// The first arguement is a reference object or another words what you want the "this" to point to
// The second argument are passed parameters of the function being chained to the 'call'

//*APPLY
//The only difference between apply and call is the way we pass arguements
//  The second arguement is passed as an array list
printFullName.apply(objNames1, ['Las Vegas', 'Nevada']);

//*BIND
//Same as the call except it's not directly invoked which allows us to invoke at a later time
const printMyName = printFullName.bind(objNames1, 'Seattle', 'Washington');
printMyName();
