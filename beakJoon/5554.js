const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(e => {
    return parseInt(e);
  });
let sum = 0;
for (v of input) sum += v;
console.log(Math.floor(sum / 60));
console.log(Math.floor(sum % 60));
console.log();
