const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
for (let i = 0; i < n; i++) {
  let sum = 0;
  let con = 0;
  for (let j = 0; j < input[i + 1].length; j++) {
    if (input[i + 1][j] === "O") {
      con += 1;
      sum += con;
    }
    if (input[i + 1][j] == "X") {
      con = 0;
    }
  }
  console.log(sum);
}
