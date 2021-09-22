class Solution:
    def twoSum(self, nums, target):
        lookup = {}
        for i in range(len(nums)):
            if target - nums[i] in lookup:
                return [i, lookup[target-nums[i]]]
            lookup[nums[i]] = i