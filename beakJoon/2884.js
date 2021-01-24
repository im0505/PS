const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(e => {
    return parseInt(e);
  });

if (input[1] < 45) {
  if (input[0] === 0) {
    input[0] = 24;
  }
  console.log(input[0] - 1, 60 - Math.abs(input[1] - 45));
} else {
  console.log(input[0], input[1] - 45);
}
