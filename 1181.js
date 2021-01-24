const fs = require("fs");
const t = {};
const dup = {};
let max = 0;
const input = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => {
    const word = e.trim();
    const l = word.length;
    if (l > max) max = l;
    if (dup[word]) return;
    else dup[word] = true;
    if (!t[l]) t[l] = [word];
    else t[l].push(word);
  });

const newArr = [];
for (let i = 0; i <= max; i++) {
  if (t[i]) {
    newArr.push(...t[i].sort());
  }
}
console.log(Array.from(newArr).join("\n"));
