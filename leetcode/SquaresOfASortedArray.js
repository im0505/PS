/**
 * Given an array of integers A sorted in non-decreasing order,
 * return an array of the squares of each number, also in sorted
 * non-decreasing order.
 *
 * @param {number[]} A
 * @return {number[]}
 */

const sortedSquares = function (A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i] ** 2;
  }
  return A.sort((a, b) => a - b);
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));
