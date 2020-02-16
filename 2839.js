const fs = require('fs');
let SUGAR = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let bags = 0;
while (true) {
  if (SUGAR % 5 === 0) {
    console.log(SUGAR / 5 + bags);
    break;
  } else if (SUGAR <= 0) {
    console.log(-1);
    break;
  }
  SUGAR = SUGAR - 3;
  bags++;
}