const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(e => {
    return parseInt(e);
  });
for (let i = input[0]; i <= input[1]; i++) {
  if (isPrime(i) !== false) console.log(i);
}

function isPrime(n) {
  if (n === 1) return false;
  if (n <= 3) return n;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (var i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return n;
}
