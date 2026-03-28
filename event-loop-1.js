const fs = require("fs");
const a = 100;

setTimeout(() => console.log("setImmediate callback executed"));

fs.readFile("./file.txt", "utf-8", () => {  
  console.log("File reading cb executed");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
    console.log("Age", a);
}

printA();
console.log("End of script");