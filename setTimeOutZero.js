console.log("Hello World");

var a = 10;
var b = 20;


// this  callback will only be pushed to the callstack after the current execution context is completed and the timer has completed
// this callback will only be pushed to callstack in v8 once the call stack is empty and the timer has completed
setTimeout(() => {
  // 0ms = 0s
  console.log("call me as soon as possible");
}, 0);

setTimeout(() => {
  // 5000ms = 5s
  console.log("call me after 5 seconds");
}, 5000);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
