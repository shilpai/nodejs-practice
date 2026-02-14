const fs = require("fs");
const https = require("https");

console.log("Start");

var a = 10;
var b = 20;

https.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
  console.log("Data received from API");
});


setTimeout(() => {  // 5000ms = 5s
  console.log("Timer completed");
}, 5000);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File read completed");
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);