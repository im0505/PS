//내가짠코드
function solution(arr) {
  let newArr = [];
  newArr.push(arr[0]);
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (newArr[index] === arr[i]) continue;
    newArr.push(arr[i]);
    index++;
  }
  return newArr;
}
//고인물의 코드
let sol = (_) => _.filter((v, $) => v != _[--$]);
console.log(sol([1, 1, 3, 3, 0, 1, 1]));
