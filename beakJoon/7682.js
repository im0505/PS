const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\r\n");

const check = arr => {
  let Owin = false,
    Xwin = false;
  //check row first
  for (let i = 0; i < 3; i++) {
    let Xs = 0,
      Os = 0;
    const row = arr[i];
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] === ".") break;
      if (arr[i][j] === "X") Xs++;
      if (arr[i][j] === "O") Os++;
    }
    if (Xs === 3) Xwin = true;
    if (Os === 3) OWin = true;
  }

  //check colum
  for (let i = 0; i < 3; i++) {
    let Xs = 0,
      Os = 0;
    for (let j = 0; j < 3; j++) {
      if (arr[j][i] === ".") break;
      if (arr[j][i] === "X") Xs++;
      if (arr[j][i] === "O") Os++;
    }
    if (Xs === 3) Xwin = true;
    if (Os === 3) Owin = true;
  }

  //check diagonal
  if (
    (arr[0][0] === "X" && arr[1][1] === "X" && arr[2][2] === "X") ||
    (arr[2][0] === "X" && arr[1][1] === "X" && arr[0][2] === "X")
  )
    Xwin = true;
  if (
    (arr[0][0] === "O" && arr[1][1] === "O" && arr[2][2] === "O") ||
    (arr[2][0] === "O" && arr[1][1] === "O" && arr[0][2] === "O")
  )
    Owin = true;
  return [Xwin, Owin];
};

for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].slice(0);
  let Xs = 0,
    Os = 0;
  let board = [[]];
  let row = 0;
  for (let j = 0; j < 9; j++) {
    if (arr[j] === "X") Xs++;
    if (arr[j] === "O") Os++;
    board[row].push(arr[j]);
    if ((j + 1) % 3 === 0 && j + 1 !== 9) {
      board.push([]);
      row++;
    }
  }
  if (Os > Xs) {
    console.log("invalid");
  } else if (
    check(board)[1] === true &&
    check(board)[0] === false &&
    Os === Xs
  ) {
    console.log("valid");
  } else if (
    check(board)[0] === true &&
    check(board)[1] === false &&
    Os === Xs - 1
  ) {
    console.log("valid");
  } else if (check(board)[0] === true && check(board)[1] === true) {
    console.log("invalid");
  } else if (
    check(board)[0] === false &&
    check(board)[1] === false &&
    Os + Xs === 9 &&
    Os === Xs - 1
  ) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
}
