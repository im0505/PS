var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  };
  
  // ↑ naive approch O(N^2) less memory
  
  // O(N) but more memory
  var twoSum = function (nums, target) {
    let table = {};
    for (let i in nums) {
      if (table[target - nums[i]]) {
        return [i, table[target - nums[i]]];
      }
      table[nums[i]] = i;
    }
  };
  