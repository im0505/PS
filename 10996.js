const input = parseInt(
  require("fs")
    .readFileSync("./input.txt")
    .toString()
);

for (let i = 1; i <= input; i++) {
  let str = "";
  for (let j = 1; j <= input; j++) {
    if (j % 2 !== 0) {
      str += "*";
    } else if (j % 2 === 0) {
      str += " ";
    }
  }
  console.log(str);
  str = "";
  for (let j = 1; j <= input; j++) {
    if (j % 2 === 0) {
      str += "*";
    } else if (j % 2 !== 0) {
      str += " ";
    }
  }
  console.log(str);
}
