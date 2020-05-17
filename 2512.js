const inputs = require("fs").readFileSync("input.txt").toString().split("\n");
let n = parseInt(inputs[0]);
let budgets = inputs[1].split(" ").map((e) => parseInt(e));
let M = parseInt(inputs[2]);

function solution(budgets, M) {
  const max = (_) => _.reduce((_, $) => (_ > $ ? _ : $));
  var answer = 0;
  let l = 0;
  let r = max(budgets);
  let mid = null;
  let sum = 0;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    sum = 0;
    for (let i = 0; i < budgets.length; i++) {
      if (mid >= budgets[i]) sum += budgets[i];
      else sum += mid;
    }
    if (sum <= M) {
      l = mid + 1;
      answer = mid;
    } else {
      r = mid - 1;
    }
  }
  return answer;
}

console.log(solution(budgets, M));
