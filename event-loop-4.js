/**
 * End of script
NextTick
inner nextTick
Promise resolved callback executed
Timer Expired
setImmediate1
File raeading CB executed
 */

const fs = require("fs");

setImmediate(() => console.log("setImmediate1"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve().then(() => console.log("Promise resolved callback executed"));

fs.readFile("./file.text", "utf8", () => {
  console.log("File raeading CB executed");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));  
  console.log("NextTick");
});

console.log("End of script");
