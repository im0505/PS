const input = require("fs").readFileSync("input.txt").toString();

let stack = 0;
let sum = 0;
for (let i = 0; i < input.length; i++) {
  //레이저인지 판단
  if (input[i] === "(" && input[i + 1] === ")") {
    sum += stack;
    i++;
  } else if (input[i] === "(") {
    stack++;
  } else if (input[i] === ")") {
    stack--;
    sum += 1;
  }
}
console.log(sum);
