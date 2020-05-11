const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((e) => parseInt(e));
const [A, B, C, D] = inputs;
const X = A * inputs[4];
let Y;
if (C < inputs[4]) Y = B + D * (inputs[4] - C);
else Y = B;
if (X > Y) console.log(Y);
else console.log(X);
