const input = require("fs")
  .readFileSync("./challenging/input.txt")
  .toString()
  .split("\n")
  .map((e) => e.trim());
const [N, M] = input[0].split(" ").map((e) => parseInt(e));

const table = {};
const list = [];
for (let i = 0; i < N; i++) {
  table[input[i + 1]] = true;
}
for (let i = 0; i < M; i++) {
  if (table[input[i + N + 1]]) {
    list.push(input[i + N + 1]);
  }
}
list.sort();
console.log(list.length);
list.forEach((e) => console.log(e));
