let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(e => parseInt(e));

console.log(input.sort((a, b) => b - a).join(""));
