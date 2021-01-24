const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map(e => {
    return parseInt(e);
  });
var A = input[0],
  B = input[1],
  C = input[2];
if (C <= B) {
  console.log(-1);
} else console.log(Math.floor(A / (C - B)) + 1);
