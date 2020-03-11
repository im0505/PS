const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
let [M, K] = input[0].split(" ").map(e => parseInt(e));
for (let i = 1; i <= M; i++) input[i] = parseInt(input[i]);

let cnt = 0;
for (let size = input.length - 1; size > 0; size--) {
  if (parseInt(K / input[size]) === 0) {
    continue;
  }
  let n = parseInt(K / input[size]);
  if (n) {
    cnt += n;
    K -= input[size] * n;
  }
  if (K === 0) {
    console.log(cnt);
    return;
  }
}
