const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ");

var n1 = parseInt(
  input[0]
    .split("")
    .reverse()
    .join("")
);
var n2 = parseInt(
  input[1]
    .split("")
    .reverse()
    .join("")
);
console.log(n1 > n2 ? n1 : n2);
