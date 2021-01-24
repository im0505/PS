let [N, F] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(e => parseInt(e));
N = N.toString();
N = N.substring(0, N.length - 2);
const putNum = n => {
  if (n < 10) {
    n = "0" + n.toString();
  }
  return n;
};

for (let i = 0; i < 100; i++) {
  let thisValue = putNum(i); //string
  if (parseInt(N + thisValue) % F === 0) {
    min = parseInt(thisValue);
    console.log(putNum(min));
    return;
  }
}
