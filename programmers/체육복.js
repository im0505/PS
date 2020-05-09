function solution(n, lost, reserve) {
  let answer = n;
  const obj = {};
  for (let v of reserve) {
    obj[v] = true;
  }
  for (let i = 0; i < lost.length; i++) {
    if (obj[lost[i]] === true) {
      obj[lost[i]] = false;
      lost[i] = -1;
    }
  }
  for (let i = 0; i < lost.length; i++) {
    if (obj[lost[i] - 1]) {
      obj[lost[i] - 1] = false;
      lost[i] = -1;
    }
    if (obj[lost[i] + 1]) {
      obj[lost[i] + 1] = false;
      lost[i] = -1;
    }
  }
  for (let v of lost) {
    if (v !== -1) {
      answer--;
    }
  }
  return answer;
}

const n = 5;
const lost = [2, 3, 4];
const reserve = [1, 3, 5];

console.log(solution(n, lost, reserve));
