/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
 // 忽略异常边界
 // 排序
//  -101 -1 -1 0 1 2 100
  nums.sort((a , b) => a - b)
  const twoSum = (n, count, res) => {
    let i = n + 1;
    let j = nums.length - 1;
    while(i<j){
        const num = nums[i] + nums[j];
        if(num > count){
            j --;
        }else if(num < count){
            i++；
        }else{
            res.push([nums[n], nums[i], nums[j]])
        }
    }
  }
  const result = [];
  while(i < nums.length){
    const towCount = 0 - nums[i];
    twoSum(i, towCount, result)
    i++;
  }
  return result;
};
// @lc code=end

