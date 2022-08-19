// JAVASCRIPT
// 1 - map vs forEach
// 2 - null vs undefined
// 3 - Event Delegation
// 4 - Array.flat implementation
// 5 - var vs let vs const
// 6 - 2 - setTimeout Based Output
// 7 - call, bind and apply
// 8 - Infinite Currying
// 9 - Compose Polyfill
// 10 - Implement Promise.all()
// 11 - Built in JS data structures

// REACT
// 12 - PROPS VS STATE
// 13 - WHAT IS JSX
// 14 - WHY DOES JSX RUN IN THE BROWSER
// 15 - React Lifecycle methods
// 16 - Implement Debounce
// 17 - RECONILIATION
// 18 - COMMON HOOKS

// CSS
// 19 - Ways to center a div
// 20 - CSS Box Model
// 21 - ANIMATION
// 22 - CHANGES FROM CSS3 TO CSS2

// HTML
// 23 - CHANGES FROM HTML4 TO HTML5
// 24 - WHAT IS CDN
// 25 - Describe Async and Defer process


// * -----------------------------------------------------------
//* JAVASCRIPT
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

//* Example 1:
// let a;
// console.log(a)

//* Example 2:
//null is a variable that is defined but is missing a value.
// let b=[]
// console.log(b[3]==null)
//true

//* Example 3:
// Not defined is non existent
// console.log(c)
//script.js:58 Uncaught ReferenceError: c is not defined

//* Types
// console.log(typeof(null))
//object
// console.log(typeof(undefined))
//undefined

//* Equaliity Operator
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

//* 5 - var vs let vs const

// *var
// var is functional scope, global and can be reassigned/redeclared and reinitialized
// var a = 1;
// var a = 10;
// a = 100;

// *let
// let is block scope can not be reassigned but can be reinitialized
// let b = 2;
// let b = 20;
// b = 200;
// Uncaught SyntaxError: Identifier 'b' has already been declared

//* const
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
https://www.youtube.com/watch?v=vxggZffOqek
function add(arg1) {
  return function (moreThanOneArg) {
    if(moreThanOneArg)return add(arg1+moreThanOneArg);
    return arg1;
  };
}
// console.log(add(5)());
// console.log(add(5)(2)(4)(5)())
//* -----------------------------------------------------------

//* 9 - Compose and Pipe Polyfill
// compose evaluates the arguments right to left
// pipe evaluates the arguments left  to right
const addFive = (a) => {
  return a + 5;
};
const subtractTwo = (a) => {
  return a - 2;
};
const multiplyFour = (a) => {
  return a * 4;
};
const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};
// Heres the compose function
const evaluate = compose(addFive, subtractTwo, multiplyFour);
// console.log(evaluate(1));
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
//* 11 - Built in JS data structures
// Stack
// Queue
// Linked List
// Set
// Hash Table
// Tree
// Trie
// Graph
// * -----------------------------------------------------------

//* REACT
// 12 - PROPS VS STATE
// 13 - WHAT IS JSX
// 14 - WHY DOES JSX RUN IN THE BROWSER
// 15 - React Lifecycle methods
// 16 - Implement Debounce
// 17 - RECONILLIATION
// 18 - COMMON HOOKS
//  React compiler?

//* 15 - React Lifecycle methods
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

//* 16 - Implement Debounce, search functionality
const myDebounce = (callback, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
const handleChange = myDebounce((e) => {
  // console.log(e.target.value);
}, 1000);

// in the return of the app.js will have an input passing the prop
// return (
//   <div className='App'>
//     <input onChange={handleChange}/>
//   </div>
// )
// * -----------------------------------------------------------

//* CSS
//* 19 - Ways to center a div
//* see style sheet
// * -----------------------------------------------------------

//* 20 - CSS Box Model
//* see style sheet
// * -----------------------------------------------------------
//*  21 - Animation
//* @keyframes
//* animation-name
//* animation-duration
//* animation-delay
//* animation-iteration-count
//* animation-direction
//* animation-timing-function
//* animation-fill-mode
//* animation
// * -----------------------------------------------------------
//*  22 - Changes from CSS3 TO CSS2
//*  new properties Angle units deg, grad, rad, and switch or Time units s and ms.
//*  modules
//*  Combinator
//*  Supports border box
//*  The CSS3 version supports more browsers than CSS2
//*  new selectors and pseudo-elements and pseudo-categories.
// * -----------------------------------------------------------

//* HTML
//* 23 - Describe Async and Defer process
//* Async - means execute code when it is downloaded and do not block DOM construction during downloading process.
//* Defer - means execute code after it's downloaded and browser finished DOM construction and rendering process.
// * -----------------------------------------------------------

//* 24 - What is a CDN
//* A CDN (content delivery network), also called a content distribution network, is a group of geographically distributed and interconnected servers. They provide cached internet content from a network location closest to a user to speed up its delivery.
// * -----------------------------------------------------------


//*  25 - Big changes from HTML4 to HTML5
//* - New semantic tags such as audio, canva, and video...etc
//* - Multimedia support
//* - Easier doctype <!DOCTYPE html>
//* - html 5 has error handling and better formatting
// * -----------------------------------------------------------
