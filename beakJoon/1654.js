const inputs = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((e) => e.trim());

const [k, n] = inputs[0].split(" ").map((e) => parseInt(e));
let list = [];
let e = 0,
  s = 1,
  cnt = 0;

for (let i = 1; i < inputs.length; i++) {
  list.push(parseInt(inputs[i]));
  if (parseInt(inputs[i]) > e) e = parseInt(inputs[i]);
}
//입력의 끝으로 \n가 하나 더 들어옴...
//https://www.acmicpc.net/board/view/51202
list.pop();

let mid = null;
let res = 0;

while (true) {
  mid = Math.floor((s + e) / 2);

  for (let i = 0; i < list.length; i++) {
    cnt += Math.floor(list[i] / mid);
  }

  if (cnt >= n) {
    s = mid + 1;
    res = mid;
  } else {
    e = mid - 1;
    if (s > e) break;
  }

  cnt = 0;
}

console.log(res);
