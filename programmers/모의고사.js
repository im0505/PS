function solution(answers) {
  let answer = [];
  const firstWay = [1, 2, 3, 4, 5];
  const secondWay = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdWay = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let [a, b, c] = [0, 0, 0];

  function now(arr, idx) {
    while (idx >= arr.length) {
      idx = idx - arr.length;
    }
    return arr[idx];
  }

  for (let i = 0; i < answers.length; i++) {
    if (now(firstWay, i) == answers[i]) a++;
    if (now(secondWay, i) == answers[i]) b++;
    if (now(thirdWay, i) == answers[i]) c++;
  }

  const max = Math.max.apply(null, [a, b, c]);
  if (a === max) answer.push(1);
  if (b === max) answer.push(2);
  if (c === max) answer.push(3);

  return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
