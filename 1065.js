// const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString();
// input = parseInt(input);
// 아 문제를 이해를 못하겠네
var cnt = 0;
for (var i = 1; i <= 110; i++) {
  let a4 = Math.floor(i / 1000);
  let a3 = Math.floor((i % 1000) / 100);
  let a2 = Math.floor((i % 100) / 10);
  let a1 = Math.floor(i % 10);
  if (i % a4 === 0) {
    console.log(i);
    cnt++;
    continue;
  }
  if (i % a3 === 0) {
    console.log(i);
    cnt++;
    continue;
  }
  if (i % a2 === 0) {
    console.log(i);
    cnt++;
    continue;
  }
  if (i % a1 === 0) {
    console.log(i);
    cnt++;
    continue;
  }
}
console.log(cnt);
