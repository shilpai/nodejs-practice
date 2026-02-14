const crypto = require("crypto");

console.log("Start");

var a = 10;
var b = 20;

// pbkdf2: password based key derivation function

// synchronous function that blocks the main thread
// this will block the main thread until the derived key is generated so do not use this in production code DO NOT USE THIS
console.log("===========");
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("1st Derived key generated");

setTimeout(() => {
  console.log("call me right now!!!");
}, 0); // this will be called after the current execution context is completed and the timer has completed

// asynchronous function that takes a callback as the last argument
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
  console.log("2nd Derived key generated");
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: " + c);
