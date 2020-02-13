const fs = require("fs");
let input = parseInt(fs.readFileSync("/dev/stdin").toString());
var i = 0,
  cnt = 1;
while (true) {
  if (input <= 1) {
    break;
  }
  i = i + 6;
  input -= i;
  cnt++;
}
console.log(cnt);
