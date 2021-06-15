/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 容错处理
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while(left < right){
        let curArea = (right - left) * Math.min(height[left], height[right]);
        if (curArea > maxArea) maxArea = curArea
        if(height[left] < height[right]){
            left ++
        }else{
            right --;
        }
    }
    return maxArea
};

// console.log(maxArea([1, 1]))
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// @lc code=end

