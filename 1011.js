const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n");
const n = parseInt(input[0]);
for (let i = 1; i <= n; i++) {
  let dist = input[i].split(" ");
  dist[0] = parseInt(dist[0]);
  dist[1] = parseInt(dist[1]);
  let gap = dist[1] - dist[0];
  let m = 0;
  let currentSpeed = 0;
  while (gap > 0) {
    if (getSpeed(gap) > currentSpeed) {
      currentSpeed++;
    } else if (getSpeed(gap) < currentSpeed) {
      currentSpeed--;
    }
    // console.log(i, gap, getSpeed(gap), currentSpeed);
    gap -= currentSpeed;
    m++;
  }
  console.log(m);
}

function getSpeed(length) {
  let cnt = 1;
  if (length === 0) return 0;
  if (length === 1) return 1;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (cnt === length) {
        return i;
      }
      cnt++;
    }
  }
  return;
}
