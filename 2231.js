let input = parseInt(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
);
for (let i = 1; i <= input; i++) {
  let n = i
    .toString()
    .split("")
    .map(e => parseInt(e));
  let s = n.reduce((acc, num) => acc + num) + i;
  if (s === input) {
    console.log(i);
    return;
  }
}
console.log(0);
