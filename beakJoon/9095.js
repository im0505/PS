const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((e) => parseInt(e));

const D = {
  0: 0,
  1: 1,
  2: 2,
  3: 4,
  4: 7,
  5: 13,
  6: 24,
  7: 44,
  8: 81,
  9: 149,
  10: 274,
  11: 504,
};
for (let i = 1; i <= input[0]; i++) console.log(D[input[i]]);
