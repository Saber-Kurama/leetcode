/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 一些容错
  const numberObjs = nums.reduce((preValue, num, index) => {
    preValue[num] = index;
    return preValue
  }, {});
  let i = 0
  while( i < nums.length){
    let lastNum = target - nums[i]; 
    if(numberObjs[lastNum] && numberObjs[lastNum] > i){
      return [i, numberObjs[lastNum]]
    }
    i++;
  }
  return []
  // const numsObjs = nums.reduce((preValue, num, index) => {
  //     preValue[num] = index;
  //     return preValue;
  // }, {});
  // for (let i = 0; i < nums.length; i++) {
  //   if (numsObjs[target - nums[i]] && numsObjs[target - nums[i]] !== i) {
  //     return [i, numsObjs[target - nums[i]]];
  //   }
  // }
  // return [];
};
// console.log(twoSum([1,3,4,2], 6))
// @lc code=end
