const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((e) => parseInt(e));

function isPrime(n) {
  if (n === 1) return false;
  if (n <= 3) return n;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (var i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return n;
}

for (let el of input) {
  let cnt = 0;
  if (el === 0) break;
  for (let i = el + 1; i <= el * 2; i++) {
    if (isPrime(i)) cnt++;
  }
  console.log(cnt);
}
