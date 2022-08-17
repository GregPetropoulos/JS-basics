// Round 1
// 1 - map vs forEach
// 2 - null vs undefined
// 3 - Event Deligation
// 4 - Array.flat implementation
// Round 2
// 5 - var vs let vs const
// 6 - 2 - setTimeout Based Output
// 7 - call, bind and apply
// 8 - Infinite Currying
// 9 - Compose Polyfill
// 10 - Implement Promise.all()
// WHAT ARE BUILT IN JS DATA STRUCTURES
// Round 3
// PROPS VS STATE
// WHAT IS JSX
// WHY DOES JSX RUN IN THE BROWSER
// RECONILLIATION
// COMMON HOOKS
// 11 - React Lifecycle methods
// 12 - Ways to center a div
// 13 - CSS Box Model
// 14 - Implement Debounce
// CSS
// BOX MODEL
// FLEXBOX
// ANIMATION
// CHANGES FROM CSS3 TO CSS2

// HTML
// CHANGES FROM HTML4 TO HTML5
// WHAT IS CDN
// DESCRIBE ASYNC/DEFER

// Round 4

// * -----------------------------------------------------------

// * ROUND2
//* 1 - map vs forEach
const arr = [2, 4, 5, 6, 7, 8, 9];
const mapResult = arr.map((ar) => {
  return ar + 2;
});
// returns a new array  [4, 6, 7, 8, 9, 10, 11] and can chain on if needed

const forEachResult = arr.forEach((ar, idx) => {
  // return ar+2
  //at each index at 3 to it's original vallue
  //   console.log('arr[idx]', arr[idx]);
  arr[idx] = ar + 3;
});
//returns undefined
//can modify existing array----> arr is now [5, 7, 8, 9, 10, 11, 12]

// console.log(mapResult, forEachResult, arr);
// * -----------------------------------------------------------

//* 2 - null vs undefined

//undefined is a variable that refers to something that doesn't exist, and the variable isn't defined to be anything.

//* EXAMPLE 1:
// let a;
// console.log(a)

//* EXAMPLE 2:
//null is a variable that is defined but is missing a value.
// let b=[]
// console.log(b[3]==null)
//true

//* EXAMPLE 3:
// Not defined is non existent
// console.log(c)
//script.js:58 Uncaught ReferenceError: c is not defined

//* TYPES
// console.log(typeof(null))
//object
// console.log(typeof(undefined))
//undefined

//* EQAULITY OPERATOR
// console.log(null==undefined)
//true- compares without matching types

// console.log(null===undefined)
//false -because types and don't match
// * -----------------------------------------------------------

//* 3 - Explain Event Deligation

// Let's say you have a ecommerce sit with a shopping cart list. I don't want to add an event listener for each item, instead I would have a addEventListener on the parent of the list that tags the event

//I am targeting the parent products. The products child is an LI and if clicked on the id will be added to the url drive a reroute to a products own page
const product = document.querySelector('#products');
product.addEventListener('click', (event) => {
  // console.log(event)
  if (event.target.nodeName === 'LI') {
    window.location.href += `#${event.target.id}`;
  }
});
// * -----------------------------------------------------------

//* 4 - Array.flat implementation
let arr2D = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12]
];
let arr3D = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12]
];
// combine concat and spread to flatten a 2d array
let flatten = [].concat(...arr2D);

// console.log(flatten)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// console.log(arr3D.flat(2));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//CUSTOM FLAT ARRAY FUNCTION WITH RECURSION
function customRecursionFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    // During the loop if you see an array and it has a depth, add it and spread it out into the result array. Continue meeting this condition until there is a depth of 0
    if (Array.isArray(ar) && depth > 0) {
      result = [...result, ...customRecursionFlat(ar, depth - 1)];
    } else {
      // during the loop if the value is not array then it is a number. Add it to the result array
      result = [...result, ar];
    }
  });
  return result;
}
// console.log(customRecursionFlat(arr3D,2));
// * -----------------------------------------------------------
// * ROUND2

//* 5 - var vs let vs const

// *VAR
// var is functional scope, global and can be reassigned/redeclared and reinitialized
// var a = 1;
// var a = 10;
// a = 100;

// *LET
// let is block scope can not be reassigned but can be reinitialized
// let b = 2;
// let b = 20;
// b = 200;
// Uncaught SyntaxError: Identifier 'b' has already been declared

//* CONST
// const is block scope can not be reassigned or reinitialized. This callue should remain the same a never change
// const c = 3;
// const c=30
// c=300
// * -----------------------------------------------------------

//* 6 - setTimeout Based Output
//if var is used it will not see each iteration of the loop since it's functional scope
// The block scope of the for loop is where the i block lives, the var is the whole function scope
const timeoutLoopFunc = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};
// timeoutLoopFunc()
// The js engine is referring to the current value of i and with var it will be 3 every time with let it can see the current scope of the i
// {
//     i=0
// }
// {
//     i=1
// }
// {
//     i=2

// This can be done with var and closures. will need to look further into
// * -----------------------------------------------------------

//* 7 - call, bind and apply
var person = {
  name: 'Cool coder',
  myCoolMethod: function (somethinghere) {
    console.log(`${this.name} say's hi and ${somethinghere}`);
  }
};
var otherCoder = {
  name: 'notCool Coder'
};
// person.myCoolMethod('moneybags');
// CALL
// person.myCoolMethod.call(otherCoder, 'laundrybags');

//APPLY
// person.myCoolMethod.call(otherCoder, 'laundrybags');

//BIND
// const newFunctionBind = person.myCoolMethod.bind(otherCoder);
// newFunctionBind('meatbags')
//* -----------------------------------------------------------
//* 8 - Infinite Currying
//* 9 - Compose Polyfill
// 24 min
//* -----------------------------------------------------------

//* 10 - Implement Promise.all()

function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}
// This only works if all the promise succeed, if one fails in the array the whole promise is shot
Promise.all([showText('hello', 1500), Promise.resolve('hi')]).then((value) => {
//   console.log(value);
});

// Handle if one promise fails in the array like this
function myPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, idx) => {
      p.then((res) => {
        result = [...result, p];
        if (idx === promises.length - 1) {
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
}
// * -----------------------------------------------------------

//* REACT ROUND 3
//* 11 - React Lifecycle methods
// class components vs functional components

//* CLASS
// componentDidMount(){
//     console.log('Initial mount')
// }

// componentDidUpdate(prevProps,prevState){
//     if(prevProps.number!==this.props.number){

//         console.log('Takes previous props and state to compare if there was a change')
//     }
// }

// componentWillUnmount(){
//     console.log('componentn will unmount runs')
// }
// * FUNCTIONAL

// useEffect(() => {
//   console.log('renders everything anytime anything changes');
// });

// useEffect(() => {
//   console.log('renders component on first render only');
// }, []);

// useEffect(() => {
//   console.log(
//     'renders component on first rende and anytime the value changes in the dep array'
//   );
// }, []);

// useEffect(() => {
//     console.log(
//       'renders component on first rende and anytime the value changes in the dep array'
//     );
//     return ()=> {
//         console.log('clean up Unmount the component ')
//     }
//   }, []);

// * -----------------------------------------------------------
// PROPS VS STATE
// WHAT IS JSX
// WHY DOES JSX RUN IN THE BROWSER
// RECONILLIATION
// COMMON HOOKS
// * -----------------------------------------------------------

//* 12 - Ways to center a div

// CSS
// BOX MODEL
// FLEXBOX
// ANIMATION
// CHANGES FROM CSS3 TO CSS2

// HTML
// CHANGES FROM HTML4 TO HTML5
// WHAT IS CDN
// DESCRIBE ASYNC/DEFER