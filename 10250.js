const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const t = parseInt(input[0]);
for (let i = 1; i <= t; i++) {
  let H = parseInt(input[i].split(" ")[0]),
    W = parseInt(input[i].split(" ")[1]),
    N = parseInt(input[i].split(" ")[2]);
  let f = N % H === 0 ? H : N % H;
  let r = N / H === Math.floor(N / H) ? N / H : Math.floor(N / H) + 1;
  if (r < 10) {
    r = "0" + r;
  }
  f = f.toString().concat(r);
  console.log(f);
}
