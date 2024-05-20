/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in obj) {
            return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
};

//The time complexity of the solution is 𝑂(𝑛).
//The space complexity of the solution is 𝑂(𝑛).