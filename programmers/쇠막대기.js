function solution(str) {
  var sum = 0;
  let stack = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" && str[i + 1] === ")") {
      sum += stack;
      i++;
    } else if (str[i] === "(") stack++;
    else if (str[i] === ")") {
      stack--;
      sum += 1;
    }
  }

  return sum;
}
console.log(solution("()(((()())(())()))(())"));
