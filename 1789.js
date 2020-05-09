const S = parseInt(require("fs").readFileSync("./input.txt").toString());
let idx = 1;
let sum = 0;

while (true) {
  sum += idx;
  if (sum > S) {
    console.log(--idx);
    break;
  }
  idx++;
}
