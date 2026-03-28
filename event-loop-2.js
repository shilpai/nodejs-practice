//Output:
// Age 100
// End of script
// nextTick callback executed
// Promise resolved callback executed
// Timer expired
// File reading cb executed
// setImmediate callback executed



const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate callback executed"));

Promise.resolve().then(() => console.log("Promise resolved callback executed"));

fs.readFile("./file.txt", "utf-8", () => {  
  console.log("File reading cb executed");
});

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(() => console.log("nextTick callback executed"));

function printA() {
    console.log("Age", a);
}

printA();
console.log("End of script");