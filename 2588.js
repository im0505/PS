const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

console.log(Number.parseInt(input[1][2]) * Number.parseInt(input[0]));
console.log(Number.parseInt(input[1][1]) * Number.parseInt(input[0]));
console.log(Number.parseInt(input[1][0]) * Number.parseInt(input[0]));
console.log(Number.parseInt(input[1]) * Number.parseInt(input[0]));
