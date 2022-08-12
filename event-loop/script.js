// https://www.youtube.com/watch?v=8zKuNo4ay8E

//* JS is single threaded and has one call stack

//* Call stack uses LIFO, everything must go through this one call stack

//* A Global Execution Context is created in the call stack and reads line by line of the function. A function is ran and removed then leaves the call stack

//* Browsers/JS Engine provides superpowers to the call stack via WEB API

//* Window has WEB APIS (SUPER POWERS OF BROWSER)-setTimeout, DOM APIS,CONSOLE.LOG, FETCH, LOCAL STORAGE, LOCATION. Several callbacks can be executed here. The DOM API will register events like 'click' and is listening to run the callback of the event.

// * Microtask Queue a staging area that runs higher priority callbacks such as promises/fetch api. Can hold multiple callbacks. See promises and mutation observer as controller of priority and starvation

// * Callback queue is a staging area once function finished running in the Web API (EX:setTimeout). The callback queue can hold multiple callbacks

// * Event loop (Gatekeeper) is inifintely checking the call stack to be empty and the callback queue or microtask queue for a finshed callback to send it to the call stack.
//* The microtask queue must be completely empty for the event loop to pick up callbacks out of the callback queue

// *GEC added back in the call stack and runs the callback line by line that came from the event loop
// *----------------------------------------------------
// *----------------------------------------------------

//*WORKFLOW WITHOUT WEB API
// * - gec created in call stack line by line
// * - event loop picks up callback
// * -  callback executes
// * - call stack removes gec
console.log('START');
// *----------------------------------------------------

//*WORKFLOW WITH FETCH WEB API
// * - gec created in call stack
// * - callback goes to Web API and executes
// * - once finished gets sent to the higher priority (promises) microtask queue
// * - event loop picks up all callbacks from microtask queue
// * - gec runs the callback in call stack
// * - call stack removes gec
const usersJson = fetch('https://jsonplaceholder.typicode.com/users').then(
  (response) => {
    console.log('Promise response from first .then', response);
    return response.json();
  }
);
// *----------------------------------------------------

//*WORKFLOW WITH SETTIMEOUT WEB API
// * - gec created in call stack
// * - callback goes to Web API and executes
// *! - once finished gets sent to the callback queue not microtask queue
// * - event loop checks if microtask queue is empty then picks up on callback queue
// * - gec runs the callback in call stack line by line
// * - call stack removes gec
const withSetTimeout = () => {
  setTimeout(() => {
    console.log('setTimeout 3 second callback');
  }, 3000);
};
withSetTimeout();
// *----------------------------------------------------

//*WORKFLOW WITHOUT WEB API
// * - gec created in call stack line by line
// * - event loop picks up callback
// * -  callback executes
// * - call stack removes gec
console.log('END');
// *----------------------------------------------------
