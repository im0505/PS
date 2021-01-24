const inputs = require("fs").readFileSync("./input.txt").toString().split("\n");
const T = parseInt(inputs[0]);

for (let i = 1; i <= T; i++) {
  [r, e, c] = inputs[i].split(" ").map((e) => parseInt(e));
  if (e - r > c) console.log("advertise");
  if (e - r === c) console.log("does not matter");
  if (e - r < c) console.log("do not advertise");
}
