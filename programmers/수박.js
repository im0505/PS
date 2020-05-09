function solution(n) {
  var answer = "";
  let cnt = 0;
  let flag = true;
  while (n !== cnt) {
    if (flag) answer += "수";
    else answer += "박";
    flag = !flag;
    cnt++;
  }
  return answer;
}
console.log(solution(9));
