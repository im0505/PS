/**
 
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.} n 

*/
/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function (n) {
    let d = new Map([
      [0, 0],
      [1, 1],
      [2, 1],
    ]);
    for (let i = 3; i <= n; i++) {
      d.set(i, d.get(i - 1) + d.get(i - 2) + d.get(i - 3));
    }
    return d.get(n);
  };