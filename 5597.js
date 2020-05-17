const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((e) => parseInt(e));

const obj = {};
for (let v of inputs) {
  obj[v] = true;
}
const abs = [];
for (let i = 1; i <= 30; i++) {
  if (!obj[i]) abs.push(i);
}

abs.sort((a, b) => a - b).forEach((e) => console.log(e));
