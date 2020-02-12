const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const a = parseInt(input[0]);
for (let i = 0; i < a; i++) {
  let c = input[i + 1].split(" ");
  console.log(
    `Case #${i + 1}: ${parseInt(c[0])} + ${parseInt(c[1])} = ${parseInt(c[0]) +
      parseInt(c[1])}`
  );
}
