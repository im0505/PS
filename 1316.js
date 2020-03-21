const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(e => e.trim());

const N = parseInt(input[0]);
let cnt = 0;
for (let i = 1; i <= N; i++) {
  let obj = {};
  for (let index in input[i]) {
    if (input[i].length === 1) {
      cnt++;
      break;
    }
    if (!obj[input[i][index]]) {
      obj[input[i][index]] = index;
    } else {
      if (obj[input[i][index]] === (index - 1).toString()) {
        obj[input[i][index]] = index;
      } else if (obj[input[i][index]] !== (index - 1).toString()) {
        break;
      }
    }
    if (parseInt(index) === input[i].length - 1) {
      cnt++;
    }
  }
}
// 아휴 드러워
console.log(cnt);
