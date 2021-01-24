let arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let total = arr.reduce((acc, cv) => acc + cv);
const sum = arr => arr.reduce((acc, cv) => (acc += cv));

for (let i = 0; i < arr.length; i++) {
  const cparr = arr.slice(0);
  cparr.splice(i, 1);
  const s = sum(cparr);
  for (let j = 0; j < cparr.length; j++) {
    if (s - cparr[j] === 100) {
      cparr.splice(j, 1);
      console.log(
        cparr
          .sort((a, b) => a - b)
          .reduce((n, cv) => {
            return (n += cv + "\n");
          }, "")
          .trim()
      );
      return;
    }
  }
}
