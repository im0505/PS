const inputs = require("fs").readFileSync("input.txt").toString().split("\n");
let list = inputs[1].split(" ").map((e) => parseInt(e));
const table = {};
for (let i = 0; i < list.length; i++) {
  table[list[i]] = true;
}
list = inputs[3].split(" ").map((e) => parseInt(e));
str = "";
for (let i = 0; i < list.length; i++) {
  if (table[list[i]]) str += " 1";
  else str += " 0";
}
str = str.slice(1, str.length);
console.log(str);
