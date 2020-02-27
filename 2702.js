let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

for (let i = 0; i < parseInt(input[0]); i++) {
  let arr = input[i + 1].split(" ").map(e => parseInt(e));
  if (arr[0] === arr[1]) {
    console.log(arr[0], arr[0]);
    continue;
  }
  let b, s;
  if (arr[0] > arr[1]) {
    b = arr[0];
    s = arr[1];
  } else {
    b = arr[1];
    s = arr[0];
  }
  let cm,
    cd,
    cnt = 1;
  while (true) {
    if ((cnt * b) % s === 0) {
      cm = cnt * b;
      break;
    }
    cnt++;
  }
  cnt = s;
  while (true) {
    if (b % cnt === 0 && s % cnt === 0) {
      cd = cnt;
      break;
    }
    cnt--;
  }
  console.log(cm, cd);
}
