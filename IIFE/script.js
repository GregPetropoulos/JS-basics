// *IIFE
//* Immediately Invoked Function Expression
//* good for data privacy
//* IIFE CAN NOT BE ACCESSED BY THE OUTSIDE WORLD

// (function () {
     // some logic here
// })();


(function () {
    const foo='hello'
    console.log(foo)
})();
console.log(foo);