const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const n = parseInt(input[0]);
const map = [...Array(100)].map((e) => Array(100).fill(null));
let cnt = 0;
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map((e) => parseInt(e));
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      if (map[j][k] === 1) {
        continue;
      }
      map[j][k] = 1;
      ++cnt;
    }
  }
}
console.log(cnt);
