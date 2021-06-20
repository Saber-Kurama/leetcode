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
var threeSum = function (nums) {
  // 忽略异常边界
  // 排序
  nums.sort((a, b) => a - b);

  const twoSum = (n, count, res) => {
    let i = n + 1;
    let j = nums.length - 1;
    while (i < j) {
      const num = nums[i] + nums[j];
      if (num > count) {
        j--;
      } else if (num < count) {
        i++;
      } else {
        res.push([nums[n], nums[i], nums[j]]);
        while (nums[i] === nums[i + 1]) {
          i++;
        }
        while (nums[j] === nums[j - 1]) {
          j--;
        }
        i++;
        j--;
      }
    }
  };
  const result = [];
  let m = 0;
  while (m < nums.length) {
    if (nums[m] > 0) {
      break;
    }
    if (m > 0 && nums[m] === nums[m - 1]) {
      m++;
      continue;
    }
    const towCount = 0 - nums[m];
    twoSum(m, towCount, result);
    m++;
  }
  return result;
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// @lc code=end
