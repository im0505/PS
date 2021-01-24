const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim();
input = parseInt(input);
let sum = 0;
for (let i = 1; i <= input; i++) {
  if (i < 100) {
    sum++;
  } else {
    let arr = i
      .toString()
      .split("")
      .map(e => parseInt(e));
    if (arr[0] - arr[1] === arr[1] - arr[2]) {
      sum++;
    }
  }
}
console.log(sum);
