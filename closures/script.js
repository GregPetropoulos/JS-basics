// WHAT IS A CLOSURE?
//A function along with a reference to its outer environment together forms a closure. You could say a closure is a combination of function and it's lexical scope tied together.
//* - Each function in js has a access to it's outer lexical environment, Any variables or functions in it's parent scope
//* 1. If the function is executed some where in the code it still has a memory of its lexical environment

//* 2. Passed arguments and variables "var" or "let" inside the closure are the lexical environment that any inner function has reference and access to

//* 3. Nested functions still have access the to the top lexical environment

// * 4. Conflicting name variables-if two variables with the same named variable a closure will look for its local scoped variable first, if not found it will default to the global variable with the same name

//* 5 Garbage collector - JS engine will handle unused variables is removed from memory to free up browser. A closure may  allow an unused variable to be garbage collected

//* Disadvantages - uses a lot of memory, leads to memory leaks, browser crash

//* Advantages of closures, function currying, memoize, data hiding and encapsulation

//* DATA HIDING EX:
function counterHiding() {
  let count = 0;
  return function incrementCounter() {
    count++;
    console.log('counte here--->', count);
  };
}
//console.log(count) // <------can't be accessed outeside of the counterHiding

let counter1 = counterHiding();
counter1();

// * BASIC CLOSURE EX:
function outerClosure(b) {
  //arguements "b" in the parameter are still part of the lexical environment

  let a = 10;
  //If this var a is changed to let variable for block scope it will still run the same
  function innerClosure() {
    //innerClosure has access to var a the lexical environment
    console.log(a, b);
  }
  return innerClosure;
}
//if innerClosure is ran outside of the lexical scope and innerclosure still remembers the var/let a,
// The first paranthesis returns the outer function returns the innerClosure function and the second paranthesis will execute the innerClosure function
outerClosure('outerArg--helloworlds')();

// *-----------------------------------------------------------------
// *-----------------------------------------------------------------
// *SETTIMEOUT+CLOSURES INTERVIEW QS

// 1. The function x has a closure and setTimeout has it's own closure
// 2. The closure is a function with it's lexical environment

function x() {
  const i = 1;
  setTimeout(() => {
    console.log(i);
  }, 3000);
  console.log('Greg Petropoulos JavaScript');
}
x();

//*3.Caveat with LET in a for loop with a setimeout inside it will reference the i varaible not the value, to fix this we must change the const i=1 to let i=1. let is a block scope variable and on each iteration there is a new set timeout closure with a new variable assigned to the value
//* ---example:
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log('Greg Petropoulos  with a for loop JavaScript');
}
x();

//*4.Caveat with VAR in a for loop with a setimeout inside it must be wrapped in a function to create a additional closure to be called on for every iteration. For every setTimeout is called a new copy of newVar is in it
// *---example:
function x() {
  // x closure

  for (var i = 1; i <= 5; i++) {
    function closureWrapper(newVar) {
      //closureWrapper closure

      setTimeout(() => {
        //setTimeout closure
        console.log(newVar);
      }, newVar * 1000);
    }
    closureWrapper(i);
  }
  console.log('Greg Petropoulos  with a for loop JavaScript');
}
x();
// *-----------------------------------------------------------------
// *-----------------------------------------------------------------
