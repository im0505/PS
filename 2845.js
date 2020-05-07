const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map((e) => parseInt(e));
const P = N * M;
const [a, b, c, d, e] = input[1].split(" ").map((e) => parseInt(e) - P);
console.log(a, b, c, d, e);
