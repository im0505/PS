function solution(board, moves) {
  let answer = 0;

  const Y = board[0].length;
  const stack = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < Y; j++) {
      if (board[j][moves[i] - 1] != 0) {
        stack.push(board[j][moves[i] - 1]);
        if (stack.length >= 2) {
          if (stack[stack.length - 1] == stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
            answer += 2;
          }
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer;
}
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
console.log(solution(board, moves));
