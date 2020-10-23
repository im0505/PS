/**
 *
 * @param {arr} arr
 */

const solver = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && i !== arr.length - 1) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
  return arr;
};
// console.log(solver([1, 0, 2, 3, 0, 4, 5, 0]));

console.log(solver([1, 2, 3]));
