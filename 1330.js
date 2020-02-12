const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(function(n) {
    return parseInt(n);
  });
if (input[0] > input[1]) {
  console.log(">");
} else if (input[0] < input[1]) {
  console.log("<");
} else if (input[0] === input[1]) {
  console.log("==");
}
