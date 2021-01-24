const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(e => e.trim());

const table = {
  black: [0, 1],
  brown: [1, 10],
  red: [2, 100],
  orange: [3, 1000],
  yellow: [4, 10000],
  green: [5, 100000],
  blue: [6, 1000000],
  violet: [7, 10000000],
  grey: [8, 100000000],
  white: [9, 1000000000]
};
let string =
  parseInt(table[input[0]][0].toString() + table[input[1]][0].toString()) *
  parseInt(table[input[2]][1]);

console.log(string);
