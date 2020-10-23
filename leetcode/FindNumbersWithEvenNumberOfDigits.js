// Given an array nums of integers, return how many of them contain an even number of digits.

const findNumbers = function (nums) {
  let c = 0;
  for (const v of nums) {
    if (v.toString().length % 2 === 0) c++;
  }
  return c;
};

findNumbers([1, 232, 32, 1233]);
