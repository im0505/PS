let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("");
let time = 0;
while (input.length !== 0) {
  let currentChar = input.shift();
  if (["W", "X", "Y", "Z"].includes(currentChar)) {
    time += 10;
  } else if (["T", "U", "V"].includes(currentChar)) {
    time += 9;
  } else if (["P", "Q", "R", "S"].includes(currentChar)) {
    time += 8;
  } else if (["M", "N", "O"].includes(currentChar)) {
    time += 7;
  } else if (["J", "K", "L"].includes(currentChar)) {
    time += 6;
  } else if (["G", "H", "I"].includes(currentChar)) {
    time += 5;
  } else if (["D", "E", "F"].includes(currentChar)) {
    time += 4;
  } else if (["A", "B", "C"].includes(currentChar)) {
    time += 3;
  }
}
console.log(time);
