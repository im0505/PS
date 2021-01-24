const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(e => {
    return parseInt(e);
  });
let max = input[0];
let index = 1;
for (let i = 1; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    index = i + 1;
  }
}
console.log(max);
console.log(index);
