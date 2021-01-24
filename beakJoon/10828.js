const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n");

const N = parseInt(input.shift());

const arr = [];

const cmd = {
  push: n => {
    arr.push(n);
  },
  pop: () => {
    if (arr.length > 0) {
      console.log(arr[arr.length - 1]);
      arr.pop();
    } else if (arr.length === 0) {
      console.log("-1");
    }
  },
  size: () => {
    console.log(arr.length);
  },
  empty: () => {
    if (arr.length === 0) {
      console.log("1");
    } else if (arr.length > 0) {
      console.log("0");
    }
  },
  top: () => {
    if (arr.length > 0) {
      console.log(arr[arr.length - 1]);
    } else if (arr.length === 0) {
      console.log("-1");
    }
  }
};

for (let i = 0; i < N; i++) {
  let line = input[i].split(" ").map(e => e.trim());
  if (line[1]) {
    cmd[line[0]](parseInt(line[1]));
  } else {
    cmd[line[0]]();
  }
}
