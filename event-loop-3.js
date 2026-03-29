/**
 * 
End of script
nextTick callback executed
Promise resolved callback executed
Timer expired
File reading cb executed
2nd nextick
setImmediate callback executed
2nd setImmediate
Timer expired inside file reading cb
 */


const fs =  require("fs");

setImmediate(() => console.log("setImmediate callback executed"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve().then(() => console.log("Promise resolved callback executed"));

fs.readFile("./file.txt", "utf-8", () => {  
  setTimeout(() => console.log("Timer expired inside file reading cb"), 0);

  process.nextTick(() => console.log("2nd nextick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File reading cb executed");
});

process.nextTick(() => console.log("nextTick callback executed"));

console.log("End of script");