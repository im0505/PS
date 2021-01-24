let input = parseInt(
  require("fs").readFileSync(`${__dirname}/input.txt`).toString()
);
let eow = 665;
while (input > 0) {
  eow++;
  if (eow.toString().includes("666")) {
    input--;
  }
}
console.log(eow);
