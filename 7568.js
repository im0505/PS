const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(e => e.trim());

let obj = {};
const N = parseInt(input[0]);
for (let i = 1; i <= N; i++) {
  let [kg, cm] = input[i].split(" ").map(e => parseInt(e));
  obj[i] = { kg, cm, order: 1 };
}

for (let i in obj) {
  for (let j in obj) {
    if (i === j) continue;
    if (obj[i].kg < obj[j].kg && obj[i].cm < obj[j].cm) {
      obj[i].order++;
    }
  }
}

let str = "";
for (let i in obj) {
  if (i === "1") {
    str += obj[i].order;
    str += " ";
  } else {
    str += obj[i].order;
    str += " ";
  }
}

console.log(str);
