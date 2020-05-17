const inputs = require("fs").readFileSync("input.txt").toString().split("\n");
const obj = {};
let list = inputs[1].split(" ").map((e) => parseInt(e));
list.forEach((e) => {
  obj[e] = true;
});
list = inputs[3].split(" ").map((e) => parseInt(e));
list.forEach((e) => {
  if (obj[e]) console.log(1);
  else console.log(0);
});
