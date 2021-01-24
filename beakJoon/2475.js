const fs = require("fs");
const input =
  fs
    .readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split(" ")
    .reduce((p, c) => {
      return Number(p) + Number(c) ** 2;
    }, 0) % 10;
console.log(input);
