var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  let mid = null;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};
console.log(search([5], 5));
