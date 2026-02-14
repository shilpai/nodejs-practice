require("./xyz.js");

// import  {x,calculateSum} from "./sum.js";
//  const {x,calculateSum} = require("./calculation/sum.js");
//  const {multiply} = require("./calculation/multiply.js");

const {calculateSum, multiplySum} = require("./calculation");


const name = "Learning Node.js";

var a = 10;
var b = 20;



// console.log(x);
calculateSum(a, b); 
multiplySum(a,b);

// console.log(`Welcome to ${name}`);
// console.log(`Value of a: ${a}`);
// console.log(`Value of b: ${b}`);
// console.log(`The sum of a and b is: ${a + b}`);
// console.log(global);
// console.log(this);
