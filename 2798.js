const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(e => parseInt(e));
let max = 0;
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let s = arr[i] + arr[j] + arr[k];
      if (s === M) {
        max = s;
        break;
      }
      if (s <= M && max < s) {
        max = s;
      }
    }
  }
}
console.log(max);
