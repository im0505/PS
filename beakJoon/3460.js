const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let stack = [];
for (let i = 1; i <= parseInt(input[0]); i++) {
  let bin = parseInt(input[i]).toString(2);
  for (let j = bin.length - 1; j >= 0; j--) {
    if (bin[j] === "1") {
      stack.push(bin.length - 1 - j);
    }
  }
  let str = stack.join(" ");
  stack = [];
  console.log(str);
}
