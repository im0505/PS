const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let len = null;

rl.on("line", function (c) {
  console.log(c);
  if (c == 0) rl.close();
  for (let i = 0; i < c.length / 2; i++) {
    if (c[i] != c[c.length - i - 1]) {
      console.log("no");
      return;
    }
  }
  console.log("yes");
}).on("close", function () {
  process.exit();
});
