function solution(heights) {
  let stack = [];
  while (heights.length > 0) {
    let now = heights.pop();
    for (let i = heights.length - 1; i >= 0; i--) {
      if (now < heights[i]) {
        stack.push(i + 1);
        break;
      }
      if (i == 0) stack.push(i);
    }
  }
  stack.push(0);
  stack.reverse();
  return stack;
}

console.log(solution([6, 9, 5, 7, 4]));
