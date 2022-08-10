
// *Async and Defer are boolean values used on script tag to load external scripts effeciently on the web page  
// JavaScript code is executed by two ways
// 1.Browser V8 JS ENGINE
// 2.Nodejs V8 ENGINE

// Three types
// 1. Synchronous (default)
// 2. Asynchronous
// 3. Defer

// *SYNCHRONOUS (DEFAULT)
// HTML parsing of scripts
{/* <script src='index.js'> */}
// when script tag is encountered the html will stop loading and the script tag will load completely then the html will finish


// *ASYNCHRONOUS(Parse as Asynchronously)
// example loading a 3rd party lib
{/* <script async src='index.js'> */}
// when the script tag is encountered the script will fetch and load when its ready and after the html is complete

// *DEFER(Parsed as defered)
{/* <script defer src='index.js'> */}
// when html is complete it will execute the script tag

// *RULES
// With multiple script tags the async attribute does not guarantee the order of loading.
// Use defer to keep an order of scripts loaded
